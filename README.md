# 🎓 EduPredict-AI: Student Performance Prediction using Machine Learning

<p align="center">
  <img src="images/home.png" width="100%" alt="EduPredict-AI Banner">
</p>

<p align="center">
  <a href="https://edu-predict-ai-two.vercel.app"><b>🔗 Live Demo</b></a> •
  <a href="#-installation">Installation</a> •
  <a href="#-application-screenshots">Screenshots</a> •
  <a href="#-key-learnings">Key Learnings</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/🚀_Live_Demo-Click_Here-success?style=for-the-badge">
</p>

<p align="center">
<img src="https://img.shields.io/badge/Python-3.8+-3776AB?style=for-the-badge&logo=python&logoColor=white">
<img src="https://img.shields.io/badge/Scikit--Learn-Machine%20Learning-F7931E?style=for-the-badge&logo=scikitlearn&logoColor=white">
<img src="https://img.shields.io/badge/Flask-Web%20Application-000000?style=for-the-badge&logo=flask&logoColor=white">
<img src="https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
<img src="https://img.shields.io/badge/Status-Live-success?style=for-the-badge">
</p>

---

## 📖 Overview

**EduPredict-AI** is an **end-to-end Machine Learning** project that predicts a student's **Mathematics Score** based on demographic and academic attributes.

The project covers the complete ML lifecycle — **Exploratory Data Analysis (EDA)**, **feature engineering**, **model training and selection**, and **deployment as a live web app** — using a modular, production-style architecture with dedicated components for data ingestion, transformation, training, prediction, logging, and exception handling.

**🔗 Try it live: [edu-predict-ai-two.vercel.app](https://edu-predict-ai-two.vercel.app)**

---

## ⭐ Project Highlights

- 📊 End-to-end Machine Learning pipeline, from raw data to a live prediction API
- 🤖 Multiple regression algorithms compared and benchmarked
- 🏆 Automatic best-model selection based on evaluation metrics
- 🧹 Structured data preprocessing and feature engineering
- ⚙️ Modular, production-style project architecture (not a single notebook)
- 📈 Real-time student score prediction through a web UI
- 🌐 Flask web application, deployed live on Vercel
- 📝 Logging and custom exception handling throughout the pipeline
- 💾 Model serialization with Pickle for fast inference
- 🚀 Solved a real serverless deployment issue (see [Deployment Notes](#-deployment-notes))

---

## 🛠 Tech Stack

**Language:** Python

**Machine Learning:** Scikit-Learn, Pandas, NumPy

**Web Framework:** Flask

**Frontend:** HTML, CSS, JavaScript

**Deployment:** Vercel (serverless)

**Tools:** Git, GitHub, VS Code, Jupyter Notebook

---

## 📂 Project Structure

```text
EduPredict-AI/
│
├── artifacts/
│   ├── data.csv
│   ├── train.csv
│   ├── test.csv
│   ├── model.pkl
│   └── preprocessor.pkl
│
├── notebook/
│   ├── EDA STUDENT PERFORMANCE.ipynb
│   └── MODEL TRAINING.ipynb
│
├── src/
│   ├── components/
│   │      data_ingestion.py
│   │      data_transformation.py
│   │      model_trainer.py
│   │
│   ├── pipeline/
│   │      train_pipeline.py
│   │      predict_pipeline.py
│   │
│   ├── logger.py
│   ├── exception.py
│   └── utils.py
│
├── static/
├── templates/
├── images/
│   ├── home.png
│   ├── prediction_form.png
│   └── result.png
│
├── app.py
├── requirements.txt
└── README.md
```

---

## ⚙ Machine Learning Workflow

```text
                    Student Dataset
                           │
                           ▼
                  Data Ingestion
                           │
                           ▼
                Data Transformation
                           │
                           ▼
                 Feature Engineering
                           │
                           ▼
               Multiple ML Algorithms
                    (compared & benchmarked)
                           │
                           ▼
               Best Model Selection
                           │
                           ▼
              Save Model & Preprocessor
                           │
                           ▼
                 Prediction Pipeline
                           │
                           ▼
          Flask Web Application (Live on Vercel)
```

---

## 📊 Dataset Features

The prediction model uses the following features:

| Feature | Type |
|---|---|
| Gender | Categorical |
| Race / Ethnicity | Categorical |
| Parental Level of Education | Categorical |
| Lunch Type | Categorical |
| Test Preparation Course | Categorical |
| Reading Score | Numerical |
| Writing Score | Numerical |

**🎯 Target Variable:** Mathematics Score

> 📌 **Model Performance:** The best-performing model achieved **88% accuracy** on the held-out test set.

---

## 📸 Application Screenshots

### 🏠 Home Page
Landing page with an overview of the application and its key features.

<p align="center">
<img src="images/home.png" width="90%">
</p>

### 📝 Student Information Form
Users enter academic and demographic details required by the model.

<p align="center">
<img src="images/prediction_form.png" width="90%">
</p>

### 📈 Prediction Result
The trained model predicts the student's Mathematics score instantly, with a performance indicator.

<p align="center">
<img src="images/result.png" width="90%">
</p>

---

## 🚀 Installation (Run Locally)

```bash
# Clone the repository
git clone https://github.com/Anujku007/EduPredict-AI.git
cd EduPredict-AI

# Create and activate a virtual environment
python -m venv venv

# Windows
venv\Scripts\activate
# Linux / macOS
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the application
python app.py
```

Then open **http://127.0.0.1:5000** in your browser.

Or skip all of this and just use the **[live demo](https://edu-predict-ai-two.vercel.app)** instead.

---

## 💻 How It Works

```text
Student Information (Web Form)
          │
          ▼
Flask Web Application
          │
          ▼
Prediction Pipeline
          │
          ▼
Data Preprocessing (saved preprocessor.pkl)
          │
          ▼
Trained Machine Learning Model (saved model.pkl)
          │
          ▼
Predicted Mathematics Score
```

---

## 🌐 Deployment Notes

This project is deployed as a **live serverless application on Vercel**, directly connected to this GitHub repository for automatic redeploys on every push.

**A real issue I hit and fixed during deployment:**
Vercel's serverless functions run on a **read-only filesystem** except for a temporary `/tmp` directory. The original logging setup tried to create a local `logs/` folder on startup (`os.makedirs`), which works fine locally but crashed the app in production with:

```
OSError: [Errno 30] Read-only file system: '/var/task/logs'
```

**Fix:** the logger now detects the Vercel environment (`VERCEL` env variable) and writes logs to `/tmp/logs` in production, while still using a local `logs/` folder during local development — no behavior change for local runs, no crash in production.

This was a good reminder that **"works on my machine" ≠ "works in a serverless environment"**, and debugging it required actually reading the stack trace down to the OS-level error rather than guessing.

---

## 💡 Skills Demonstrated

- Machine Learning & Regression Analysis
- Data Preprocessing & Feature Engineering
- Model Evaluation & Selection
- Flask Application Development
- Object-Oriented Programming
- Logging & Custom Exception Handling
- Modular, Production-Style ML Architecture
- Serverless Deployment (Vercel) & Debugging Production Issues
- Environment-Aware Configuration (local vs. production)

---

## 📚 Key Learnings

Through building and **deploying** this project, I gained hands-on experience in:

- Building production-ready Machine Learning pipelines end-to-end
- Comparing multiple regression algorithms and selecting the best performer
- Model serialization with Pickle for fast, repeatable inference
- Structuring a Flask application for maintainability, not just a demo script
- Debugging real deployment failures using stack traces and platform-specific constraints
- Writing environment-aware code that behaves correctly both locally and in serverless production
- Shipping a project all the way to a live, publicly accessible URL — not just a local notebook

---

## 🚀 Future Improvements

- [ ] Docker containerization
- [ ] GitHub Actions CI/CD pipeline
- [ ] FastAPI REST API alongside the Flask UI
- [ ] Model monitoring and a performance dashboard
- [ ] Database integration for storing prediction history
- [ ] User authentication

---

## 👨‍💻 Author

**Anuj Kumar**

📧 Feel free to connect and explore more of my projects on [GitHub](https://github.com/Anujku007).

---

## ⭐ Support

If you found this project useful, please consider giving it a **⭐ star** on GitHub — it helps support the project and motivates future development.

---

## 📜 License

This project is licensed under the **MIT License**.

---

<p align="center">
Made with ❤️ using Python, Scikit-Learn and Flask — <a href="https://edu-predict-ai-two.vercel.app">Live on Vercel</a>
</p>
