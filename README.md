<img width="245" height="206" alt="image" src="https://github.com/user-attachments/assets/2e0ccbcb-6363-4db8-b478-0486b8eeb698" />
<img width="1179" height="617" alt="image" src="https://github.com/user-attachments/assets/3d9e6636-9770-4250-add7-5f9c3f2e9a48" />


# DinoEspresso Web – Coffee Shop Website (First Year Project)

A modern, simple, and clean **front-end website** for a coffee shop brand hosted on **AWS S3**.

## 📌 Overview

DinoEspresso Web is designed for a coffee shop brand featuring modern UI styling, clean layout sections, and a responsive design that works on both desktop and mobile devices.

This project is ideal for:

* School assignments
* Portfolio projects
* UI/UX learning
* Deploying to GitHub Pages or **AWS S3**

---

## 🌟 Features

### 🔹 **Home Page**

* Hero banner
* Coffee branding
* Smooth layout with modern fonts and colors

### 🔹 **Menu Page**

* Coffee items list with pricing
* Clean card layout for better visual organization
* Images (if available)

### 🔹 **About Page**

* Shop details, including mission and vision
* Brand information

### 🔹 **Contact Page**

* Contact form (HTML only)
* Social media links
* Location section with a map or address

---

## 🛠️ Tech Stack

| Technology         | Purpose                              |
| ------------------ | ------------------------------------ |
| **HTML5**          | Page structure and content           |
| **CSS3**           | Styling, layout, and fonts           |
| **JavaScript**     | Interactive features (if any)        |
| **Images / Icons** | UI assets for visual appeal          |
| **GitHub Pages**   | Hosting for public access (optional) |
| **AWS S3**         | Hosting on AWS for scalability       |

---

## 📁 Project Structure (Typical)

```
/DinoEspresso Web
│
├── index.html
├── about.html
├── menu.html
├── contact.html
│
├── /css
│     └── style.css
│
├── /js
│     └── script.js
│
└── /images
      └── (coffee photos, icons, banners)
```

(*If your file structure is different, you can modify this — just send a screenshot of your folder.*)

---

## 🚀 How to Run the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/your-username/DinoEspresso.git
```

### 2. Open the website locally

1. Double-click `index.html` to open it in your browser.
2. Alternatively, open the project with a code editor like **VS Code** and use the **Live Server** extension to view it.

---

## 🌍 Deploy to **AWS S3** for Global Hosting

Follow these steps to host your DinoEspresso Web project on **AWS S3** and deliver content globally using **CloudFront**.

### Step 1: Create an S3 Bucket

1. **Log in to the AWS Management Console** and navigate to **S3**.
2. Click **Create bucket** and give it a unique name (e.g., `dinoespresso-web`).
3. Choose the region closest to your target audience.
4. Under **Bucket settings for Block Public Access**, uncheck the block public access options.
5. Click **Create bucket**.

### Step 2: Enable Static Website Hosting in S3

1. In your bucket, go to the **Properties** tab.
2. Scroll down to **Static Website Hosting**, click **Edit**, and enable it.
3. Set the **Index document** to `index.html` and **Error document** to `error.html`.
4. Click **Save changes**.

### Step 3: Upload Your Website Files to S3

1. In the **Objects** tab, click **Upload** and select your project files (`index.html`, `menu.html`, `about.html`, etc.).
2. After uploading, ensure the files are publicly accessible by setting **public-read** permissions.

### Step 4: Set Permissions for the Bucket

To make your files publicly accessible, set the following S3 bucket policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::dinoespresso-web/*"
    }
  ]
}
```

> Replace `dinoespresso-web` with your bucket's name.

### Step 5: Set Up CloudFront (Optional, Recommended for Better Performance)

1. Go to **CloudFront** in the AWS Console.
2. Click **Create Distribution** and select **Web**.
3. For **Origin Domain Name**, select your S3 bucket.
4. Set **Viewer Protocol Policy** to **Redirect HTTP to HTTPS** for secure connections.
5. Click **Create Distribution** and wait for it to deploy.

### Step 6: Set Up a Custom Domain with Route 53 (Optional)

If you want to use a custom domain:

1. Go to **Route 53** and create a **Hosted Zone** for your domain (e.g., `dinoespresso.com`).
2. Create an **A Record** that points to your CloudFront distribution or use an **Alias** to point to your S3 bucket.

### Step 7: Access Your Website

* **Via CloudFront**: `https://your-cloudfront-domain-name.cloudfront.net`
* **Via S3**: `http://dinoespresso-web.s3-website-us-east-1.amazonaws.com`

---

## 🖼️ Screenshots (Optional)

You can add your screenshots here to showcase the project.

```markdown
![Homepage Screenshot](images/home.png)
```

---

## 👨‍💻 Author

**hsumyatnoe**
Second Semester Web Project
GitHub: [https://github.com/hsumyatnoe2092](https://github.com/hsumyatnoe2092)

---
Here's a step-by-step guide based on your requirements for setting up an S3 bucket with permissions, ACLs, encryption, and CloudFront integration, followed by uploading an image and creating the necessary bucket policy.

---

### **Step-by-Step Guide for Setting Up Your S3 Bucket**

#### **1. Enable ACL and Permissions**

* **Enable ACL (Access Control List)**:

  * By default, S3 buckets are private, and permissions are granted using IAM policies or ACLs. If you want public access to your bucket or specific files, you must enable ACL.
  * Go to the **S3 Console** → **Create Bucket** → Under **Block Public Access settings for this bucket**, ensure that **Block all public access** is unchecked if you want public access.
  * However, it’s recommended not to use ACLs for public access but instead use bucket policies.

#### **2. Block All Public Access**

* By default, AWS recommends blocking all public access to your bucket.

  * **Block all public access** → **Not allow access data in the bucket from the public**.
  * This ensures that only authorized users (such as yourself or specific services) can access the bucket’s data.

#### **3. Block with ACL**

* This setting prevents the use of ACLs for managing public access. Make sure you block public access using this method to restrict access.

#### **4. Enable Versioning**

* **Versioning**: Enable versioning to keep multiple versions of objects in the bucket. This helps with data recovery and preventing accidental overwrites.

  * In the S3 bucket settings, turn **Versioning** on.

#### **5. Add Tags**

* Add tags to help manage the bucket, such as `env: project`. This is useful for organizing and identifying your buckets based on the environment (e.g., `dev`, `prod`).

#### **6. Enable Server-Side Encryption**

* **Server-Side Encryption** (SSE) ensures that your data is encrypted at rest.

  * Turn **Server-Side Encryption** on and choose the encryption method.
  * **Encryption type**: Choose **SSE-S3** (Amazon S3-managed keys) or **KMS** (AWS Key Management Service) for more control.
  * **Enable Bucket Key** for easier and cheaper encryption with KMS.

#### **7. Advanced Settings (Object Lock)**

* **Disable Object Lock**: This is for preventing object versions from being overwritten or deleted. You can disable it if not needed.
* **Enable Object Lock**: If you want to prevent accidental deletions or overwrites, enable it.

#### **8. Create the Bucket**

* Once all settings are configured (versioning, encryption, tags, etc.), click **Create Bucket**.

---

### **9. Upload Your Photo**

* Now, upload your image to the bucket.

  * Go to your bucket → **Upload** → Choose the image file (e.g., `aandhtech.png`).

---

### **10. Resolve "Access Denied" Issue**

If you're seeing an "Access Denied" error, it means that the permissions aren't set correctly for the object. To resolve this, update the bucket policy and ensure the ACL settings allow access.

---

### **11. Create a Bucket Policy for Access**

Here’s a sample bucket policy that allows **public read access** to the objects inside your bucket.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Statement1",
      "Effect": "Allow",
      "Principal": "*",
      "Action": [
        "s3:GetObject"
      ],
      "Resource": "arn:aws:s3:::aandhtech/pub-images/*"
    }
  ]
}
```

* **Principal**: `*` means any user can access the object (public access).
* **Effect**: `Allow` means granting permission for actions (e.g., `GetObject`).
* **Action**: `s3:GetObject` allows users to download objects.
* **Resource**: Specify the ARN for the objects in the bucket. You can modify it to match your bucket name and folder path (`aandhtech/pub-images/*`).

---

### **12. Use CloudFront with S3**

* Set up a **CloudFront distribution** to cache your content globally for faster delivery.

#### **Steps to Use CloudFront**:

1. **Git Clone**: Clone your Git repository.

   ```bash
   git clone https://github.com/your-repo-name
   ```
2. **Sync your local files to the S3 bucket**:

   ```bash
   aws s3 sync ./your-local-folder s3://aandhtech
   ```
3. Go to the **CloudFront Console** → **Create Distribution** → **Web**.
4. Set the **Origin Domain Name** to your S3 bucket's URL (e.g., `aandhtech.s3.amazonaws.com`).
5. Configure **Cache settings**, **SSL/TLS** (if required), and **Viewer Protocol Policy** to **Redirect HTTP to HTTPS** for secure connections.
6. Once your distribution is deployed, you'll get a **CloudFront URL** (e.g., `d1wgk...cloudfront.net`), which can be used to access your files globally.

---

### **13. Enable Static Website Hosting**

* Go to the **S3 Console**, select your bucket, and enable **Static Website Hosting**.

  * Choose the **index.html** as the entry point for your website.
  * Optionally, specify an **error.html** for handling errors.

---

### **14. Access the Image or Website**

* After deploying and setting the policy, your image should be publicly accessible via the URL:

  ```
  https://aandhtech.s3.ap-southeast-1.amazonaws.com/aandhtech.png
  ```
* If using CloudFront, the image will be accessible through the CloudFront URL.

---

This process covers everything from enabling ACLs, blocking public access, uploading content, configuring permissions, setting up CloudFront, and deploying your content globally with AWS. Let me know if you need further assistance!

