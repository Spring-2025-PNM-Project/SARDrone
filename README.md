# **People Detector Web App** 🚀

Welcome to the **People Detector Web App**! This project is a web application that allows you to view images and automatically determine if there are people in them. The **backend** processes the images and handles classification, while the **frontend** displays the images and results.

---

## **Features** ✨

- **Image Upload & Processing** 📸  
  Upload images via a user-friendly interface. The backend processes the image using our classification model.

- **Real-Time Classification** 🤖  
  Our system checks whether a person exists in the image and provides a score from 0 to 100.

- **Easy-to-Use Interface** 💻  
  View images and see classification results seamlessly on the web.

---

## **Architecture** 🏗️

- **Backend**

  - Built using **FastAPI** and hosted on **AWS EC2**.
  - Processes image uploads and interacts with the Gemini API for classification.
  - Provides RESTful endpoints to receive and process images.

- **Frontend**
  - Displays uploaded images and their classification results.
  - Can be hosted on the same EC2 instance or via a static hosting solution (e.g., **AWS S3** + **CloudFront**).

---

## **Setup & Installation** ⚙️

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   ```

2. Set up the `.env` based on `.env.example`

3. Run using Docker

   ```bash
   docker-compose -f docker-compose.dev.yml up --build
   ```

4. Visit the website at http://localhost:3000/
