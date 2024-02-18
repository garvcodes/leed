!pip install -q langchain==0.0.150 pypdf pandas matplotlib tiktoken textract transformers openai faiss-cpu
!pip install fastapi kaleido python-multipart uvicorn cohere six>=1.13.0 beautifulsoup4>=4.11.1
!pip install -U pydantic

!pip install -U langchain

import os
import pandas as pd
import matplotlib.pyplot as plt
import ipywidgets as widgets
import textract

from transformers import GPT2TokenizerFast
from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from langchain.chains.question_answering import load_qa_chain
from langchain.llms import OpenAI
from langchain.chains import ConversationalRetrievalChain
from IPython.display import display


os.environ["OPENAI_API_KEY"] = "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"

loader = PyPDFLoader("./Accessibility-Assessment_1.pdf")
pages = loader.load_and_split()

# convert PDF to text

doc = textract.process("./Accessibility-Assessment_1.pdf")

# Step 2: Save to .txt and reopen (helps prevent issues)
with open('Accessibility-Assessment_1.txt', 'w') as f:
    f.write(doc.decode('utf-8'))

with open('Accessibility-Assessment_1.txt', 'r') as f:
    text = f.read()

# Step 3: Create function to count tokens
tokenizer = GPT2TokenizerFast.from_pretrained("gpt2")

def count_tokens(text: str) -> int:
    return len(tokenizer.encode(text))

# Step 4: Split text into chunks
text_splitter = RecursiveCharacterTextSplitter(
    # Set a really small chunk size, just to show.
    chunk_size = 512,
    chunk_overlap  = 24,
    length_function = count_tokens,
)

chunks = text_splitter.create_documents([text])

# Get embedding model
embeddings = OpenAIEmbeddings()

# Create vector database
db = FAISS.from_documents(chunks, embeddings)


# Create QA chain to integrate similarity search with user queries (answer query from knowledge base)

chain = load_qa_chain(OpenAI(temperature=0), chain_type="stuff")
chain.run(input_documents=docs, question=query)


# Create conversation chain that uses our vectordb as retriver, this also allows for chat history management
qa = ConversationalRetrievalChain.from_llm(OpenAI(temperature=0.1), db.as_retriever())

chat_history = []

def on_submit(_):
    query = input_box.value
    input_box.value = ""
    
    if query.lower() == 'exit':
        print("Thank you for using Leed.ai chatbot!")
        return
    
    result = qa({"question": query, "chat_history": chat_history})
    chat_history.append((query, result['answer']))
    
    display(widgets.HTML(f'<b>User:</b> {query}'))
    display(widgets.HTML(f'<b><font color="blue">Chatbot:</font></b> {result["answer"]}'))

print("Welcome to the Leed.ai chatbot! Type 'exit' to stop.")

input_box = widgets.Text(placeholder='Please enter your question:')
input_box.on_submit(on_submit)

display(input_box)