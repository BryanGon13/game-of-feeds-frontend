# Game of Feeds


[**Link to the live website**](https://nova-restaurant-54f750dd6682.herokuapp.com/)


# Project Overview

Game of Feeds is a social media web application inspired by the popular television series Game of Thrones. The platform imagines a world where the characters from Westeros exist in a modern environment and share their thoughts, experiences, and humour through social media posts.

Each character has their own profile where they can upload images, write captions, and interact with posts through likes. The goal of the platform is not to simulate a realistic social network, but rather to present a humorous twist on how these iconic characters might behave if they were influencers in a modern digital world.

The application allows users to create posts, browse a feed of content, explore character profiles, and interact with posts through likes. By combining a React frontend with a Django REST API backend, the project demonstrates how a modern full-stack application can be built using component-based design and RESTful architecture.

## Features

### Homepage

![Wireframe Screenshot](./static/readme_images/wf-home.png)
![Homepage Screenshot](./static/readme_images/homepage.png)

**Design Rationale:**
The homepage serves as the main content feed where users can browse posts shared by the various Game of Thrones characters.

The design prioritises simplicity and usability. Posts appear in a clean vertical layout so users can easily scroll through the content. Each post displays the character’s username, image, caption, and the date it was posted. This structure mirrors familiar social media interfaces to ensure users can immediately understand how to interact with the application.

A search bar allows users to quickly locate specific characters by username, while a filter option allows the feed to be organised based on different criteria. These features improve usability and allow users to navigate large amounts of content efficiently.

### Create Post

![wireframe Screenshot](./static/readme_images/wf-menu.png)
![Menu Page Screenshot](./static/readme_images/Menu.png)

**Design Rationale:**
The create post page allows users to upload an image and write a caption for their post.

The interface was designed to be minimal and straightforward. Users simply upload an image and write a caption before publishing the post. The layout ensures that users can clearly see the image upload area and caption field without unnecessary distractions.

This design reflects the project’s goal of creating a simple and accessible posting experience, similar to other popular social media platforms.

### Profile Page

![Wireframe Screenshot](./static/readme_images/wf-reservations.png)
![Reservations Page Screenshot](./static/readme_images/reservations.png)

**Design Rationale:**
Each character has their own profile page where users can view their information and posts.

The profile section includes:
- Profile image
- Username
- Bio
- A grid of posts created by that character

The posts are displayed in a miniature grid layout, allowing users to quickly browse the character’s content. This layout mimics common social media profile structures while keeping the design simple and visually clean.


## Key Features

- **Character Profiles**  
  - Each Game of Thrones character has their own social media profile where they can share posts and a short bio. This creates the impression that each character is participating in the platform as an influencer.

- **Post Creation**  
  - Users can upload images and add captions to create posts. This functionality demonstrates full CRUD operations between the frontend and backend.

- **Like System**  
  - Users can interact with posts by liking them. This feature allows engagement with content and reflects common social media interaction patterns.

- **Search Functionality**  
  - A search bar allows users to find characters quickly by typing their username.

- **Filtering System**  
  - Posts can be filtered to display specific content types, helping users explore the platform more efficiently.


  # User Experience

## Strategy Plane

The Game of Feeds platform was designed to be simple, humorous, and easy to navigate. Instead of replicating the complexity of large social media platforms, the application focuses on a lightweight experience where users can quickly browse posts and interact with characters from the Game of Thrones universe.

The interface intentionally avoids unnecessary complexity so that users can immediately understand how the platform works. Users can easily create posts, view profiles, and engage with content without needing extensive instructions.

The project combines entertainment with technical demonstration, showcasing how a full-stack application can be used to deliver a playful and engaging digital experience.


### Project Goals

The primary goal of Game of Feeds was to create a fun and creative platform that reimagines how Game of Thrones characters might behave in a modern social media environment.

Rather than presenting the characters in their traditional medieval setting, the project gives them a humorous modern voice. Characters such as Jon Snow, Daenerys Targaryen, and others are portrayed as influencers sharing dramatic or sarcastic captions alongside their images.

From a development perspective, the project also aims to demonstrate the ability to build a full-stack application using React and Django REST Framework, implementing authentication, CRUD functionality, and dynamic API data consumption.


#### Problems We Are Trying to Solve

Although the project is primarily comedic, it explores an interesting creative question:

What would happen if characters from fictional universes existed in modern social media culture?

The platform provides a playful answer by allowing characters to express themselves through captions and posts that reflect their personalities. This concept could also be used as a marketing strategy in entertainment media, where fictional characters interact with audiences through digital platforms.


#### Business Model

While Game of Feeds is a demonstration project, the concept could potentially be expanded into an interactive marketing platform for entertainment franchises.

Studios could use similar platforms to promote movies, television series, or games by allowing audiences to interact with fictional characters through simulated social media profiles.


## Data and Security Features

The project includes several measures to ensure secure data handling.

Sensitive configuration values such as the Django secret key and Cloudinary credentials are stored as environment variables rather than being exposed directly in the codebase.

The Django authentication system is used to securely manage user accounts and sessions. Passwords are hashed automatically and authentication tokens are required for protected API requests.

Cross-site request forgery protection is enabled for form submissions, ensuring that malicious external requests cannot compromise user data.

In production, debug mode is disabled and allowed hosts are restricted to the deployed domain.


### User Stories

#### As a First Time Visitor, I want to:
As a new user I want to browse posts so that I can see content from Game of Thrones characters.

As a new user I want to view character profiles so that I can explore their posts and bios.

As a new user I want to search for specific characters so that I can quickly find my favourite ones.

#### As a Returning Visitor, I want to:
As a returning user I want to create posts so that I can contribute new content to the platform.

As a returning user I want to like posts so that I can interact with content I enjoy.

As a returning user I want to view my profile so that I can see the posts I have created.

#### As a Superuser, I want to:
As an administrator I want to manage users and posts so that inappropriate content can be removed.

As an administrator I want to monitor database content to ensure the platform runs correctly.


### Imagery

- All images used in the Game of Feeds project were generated using AI image generation tools to represent characters from the Game of Thrones universe in a modern social media context.

## Languages Used

HTML
CSS
JavaScript
Python

## Frameworks Used

React – Frontend application framework used to build the user interface.

Django – Backend web framework used to manage the API and database.

Django REST Framework – Used to create the RESTful API consumed by the React frontend.

Bootstrap – Used for styling and responsive layout components.

## Databases Used

SQLite – Used during development.

PostgreSQL – Used in production through Heroku.

## Libraries and Packages Used

Django REST Framework
Cloudinary
Gunicorn
Pillow
Psycopg2

React libraries including:

Axios
React Router
Bootstrap React Components


## Programmes and Applications Used

Git
GitHub
VS Code
Chrome DevTools

## Cloud Application Platforms Used

Heroku – Used to host both the Django API and React application.

Cloudinary – Used to store and serve uploaded images.


## Deployment

### Local Deployment

1. **Clone the repository:**
    ```bash
    git clone https://github.com/BryanGon13/game-of-feeds-frontend
    ```

2. **Create and activate a virtual environment:**
    ```bash
    python3 -m venv venv
    source venv/bin/activate
    ```

3. **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4. **Create a `.env` file in the project root (do not commit this file) with the following variables:**
    ```
    SECRET_KEY=<your-secret-key>
    DATABASE_URL=sqlite:///db.sqlite3
    CLOUDINARY_URL=<your-cloudinary-url>
    DEBUG=True
    ```

5. **Run migrations:**
    ```bash
    python manage.py migrate
    ```

6. **Start the server:**
    ```bash
    python manage.py runserver
    ```
    Visit [http://127.0.0.1:8000](http://127.0.0.1:8000) to view the site locally.

---

### Heroku Deployment

Nova Restaurant is deployed on Heroku.  
Follow these steps to deploy your own instance:

1. **Prerequisites:**
    - A [Heroku](https://www.heroku.com/) account.
    - A [Cloudinary](https://cloudinary.com/) account for image hosting.
    - Git and [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed locally.

2. **Prepare your project for deployment:**
    Ensure the following files exist in your repository:
    - `requirements.txt` – installable dependencies:
      ```bash
      pip freeze > requirements.txt
      ```
    - `runtime.txt` – Python version (e.g.):
      ```
      python-3.12.2
      ```
    - `Procfile` – tells Heroku how to run the app:
      ```
      web: gunicorn nova.wsgi
      ```
    - Add these dependencies if not already included:
      ```
      django-heroku
      dj-database-url
      gunicorn
      psycopg2
      cloudinary
      ```

3. **Push your code to GitHub** (Heroku will deploy from there).

4. **Create the Heroku app:**
    ```bash
    heroku login
    heroku create your-app-name
    ```

5. **Add Heroku Postgres:**
    ```bash
    heroku addons:create heroku-postgresql:hobby-dev
    ```

6. **Set environment variables in Heroku:**
    In the Heroku dashboard:
    - Go to **Settings → Reveal Config Vars** and add:
      ```
      SECRET_KEY=<your-secret-key>
      DATABASE_URL=<provided by Heroku Postgres>
      CLOUDINARY_URL=<your-cloudinary-url>
      DISABLE_COLLECTSTATIC=1  # Temporarily for first deploy if static files cause errors
      DEBUG=False
      ALLOWED_HOSTS=your-app-name.herokuapp.com
      ```

7. **Deploy to Heroku:**
    ```bash
    git push heroku main
    ```

8. **Run migrations on Heroku:**
    ```bash
    heroku run python manage.py migrate
    ```

9. **(Optional) Create a superuser for Heroku:**
    ```bash
    heroku run python manage.py createsuperuser
    ```

10. **Collect static files (if disabled earlier):**
    ```bash
    heroku run python manage.py collectstatic
    ```

11. **Open your live app:**
    ```bash
    heroku open
    ```
    Or visit:
    ```
    https://your-app-name.herokuapp.com/
    ```

## Features Left to Implement

Private messaging between users

Support for video uploads

Comment system on posts

Improved profile customisation 

## Accessibility Statement

The platform was designed with accessibility considerations including sufficient colour contrast, keyboard navigability, and descriptive alt text for images to support screen readers.


## Testing

### Code Validation

To ensure code quality and best practices, the following validation tools were used:

- **HTML** — All HTML templates were tested using the [W3C Markup Validation Service](https://validator.w3.org/).  
![W3C HTML Screenshot](./static/readme_images/w3c.png)

- **CSS** — All custom CSS was tested with the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).  
![W3C CSS Screenshot](./static/readme_images/CSS.png)

- **Python** — Python code was checked using the terminal-based `flake8` command to confirm it met PEP8 style guidelines.  
![PEP8 Python Screenshot](./static/readme_images/flake8.png)

- **JavaScript** — Custom JavaScript was tested with [JSHint](https://jshint.com/) to ensure there were no syntax errors.  
![JShint Screenshot](./static/readme_images/JStest.png)

All validation tools reported no critical errors. 

---

### Manual Testing

Feature
Test
Result
Feed loading
Open homepage
Pass
Create post
Upload image and caption
Pass
Profile view
View user profile
Pass
Like system
Like and unlike post
Pass
Search
Search username
Pass


---

### Responsiveness Testing

The application was tested using Chrome DevTools device simulation and on multiple screen sizes to ensure responsiveness across desktop, tablet, and mobile devices.

---

### Known Issues

On some profile pages the miniature preview images may appear slightly misaligned. This occurs when the image focal point differs from the cropped grid layout.


## Lighthouse Performance & Accessibility

Lighthouse was used via Chrome DevTools to test the deployed site’s **Performance**, **Accessibility**, **Best Practices**, and **SEO**.

**Testing Steps:**
1. Opened the deployed Heroku site in Google Chrome.
2. Opened Chrome DevTools → Lighthouse tab.
3. Selected "Mobile" and "Desktop" tests with all categories checked.
4. Clicked **Generate Report**.

**Results (Desktop & Mobile):**  

![Lighthouse Results](./static/readme_images/lighthouse.png)  

- **Performance:** 95  
- **Accessibility:** 95  
- **Best Practices:** 78  
- **SEO:** 91  

**Notes:**  
The lower Best Practices score is due to some minor optimizations (e.g., HTTPS usage warnings from third-party resources) that do not affect core functionality.


## Credits & Acknowledgements

- **Code Institute:**  
  For providing the course structure, lessons, and guidance that formed the foundation for building this project.  

- **Code Institute Slack Community:**  
  For their quick responses, valuable insights, and helpful feedback throughout the development process.  

- **Documentation & Tutorials:**  
  Django and Bootstrap official documentation, Cloudinary integration guides, and various React tutorials were referenced to ensure best practices in coding and deployment.   

- **Personal Support:**  
  Special thanks to my cousin, **Jose Omar Gonzalez**, a full stack developer, who was with me every step of the way, providing guidance, support, and technical expertise.  






