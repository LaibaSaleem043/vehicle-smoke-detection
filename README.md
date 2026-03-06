# AI-Based Real-Time Vehicle Smoke Detection and Reporting System

![Build Status](https://img.shields.io/badge/Status-Development-orange)
![Python](https://img.shields.io/badge/Python-3.10+-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-High_Performance-009688)
![YOLO](https://img.shields.io/badge/AI-Ultralytics_YOLOv8-yellow)
![React](https://img.shields.io/badge/Frontend-React_18-61DAFB)

[cite_start]This project is a non-invasive surveillance system designed to help automate environmental law enforcement without needing new hardware[cite: 68, 71, 955]. [cite_start]It works by tapping into existing IP-based traffic cameras to spot visible vehicle smoke emissions in real-time[cite: 69, 704]. 

[cite_start]Developed as a Capstone Project (Deliverable 2) at the **Faculty of Computing & Information Technology, University of the Punjab, Lahore**[cite: 52, 53, 54, 887].

---

## The Problem
[cite_start]Major cities are dealing with severe air quality issues, heavily driven by vehicle emissions[cite: 692, 693]. [cite_start]Right now, traffic authorities mostly rely on manual, subjective observations, which means existing camera networks aren't being used to their full potential for environmental protection[cite: 682, 688, 689, 690]. [cite_start]Without an automated system, heavy polluters—often called "super-emitters"—can easily slip by unnoticed[cite: 893].

## The Solution


[cite_start]We built a real-time AI surveillance pipeline that integrates directly with standard RTSP traffic cameras[cite: 701, 704]. [cite_start]By combining deep learning object detection with Optical Character Recognition (OCR), the system creates a fully automated workflow from detection to reporting[cite: 957].

### Core Features
* [cite_start]**Dynamic Smoke Inference Module (DSIM):** A custom-trained YOLO neural network built specifically to detect tricky, semi-transparent exhaust smoke with over 85% confidence[cite: 351, 963, 965].
* [cite_start]**Automatic License Plate Recognition (ALPR):** When smoke is detected, the system zeroes in on the vehicle, cleans up the image using OpenCV filters, and reads the license plate using EasyOCR[cite: 353, 354, 355, 712, 970].
* [cite_start]**Temporal Majority Filter (Consensus Filter):** A backend logic check that makes sure the smoke is consistent across multiple frames, weeding out false alarms like dust or shadows[cite: 713, 854, 855].
* [cite_start]**Asynchronous Real-Time Alerts:** Using WebSockets, our FastAPI backend pushes confirmed violations straight to a React dashboard in under 100 milliseconds, so officers don't even have to refresh the page[cite: 378, 546, 757, 1060].
* [cite_start]**Integrity Shield:** We cryptographically link the officer's `integrity_token` to the evidence, guaranteeing the data hasn't been tampered with[cite: 329, 330].
* [cite_start]**Soft-Delete Architecture (Recycle Bin):** Accidental clicks happen, so deleted records aren't permanently erased right away[cite: 335, 336]. [cite_start]Instead, we toggle an `is_deleted` flag, giving admins a 30-day window to recover the data[cite: 337].
* [cite_start]**Emission Health Scoring:** The system keeps a running score to identify "Super-Emitters"—vehicles that repeatedly trigger the smoke detection system[cite: 338, 339].

---

## Technical Validation & Performance
[cite_start]To prove it works in the real world, the AI model was tested and validated by the Safe City Authority using a dataset of **58,000 labeled images**[cite: 1, 5, 22].
* [cite_start]**Mean Average Precision (mAP@0.50):** 91.22%[cite: 7].
* [cite_start]**Precision:** 95.71%[cite: 7].
* [cite_start]**Inference Speed:** 23.2 ms (Enabling live video processing at ~43 frames per second)[cite: 7, 11].
* [cite_start]**High-Risk Emissions:** 100% recall on black smoke capture[cite: 7, 10].

---

## Technology Stack

| Category | Technology | Usage |
| :--- | :--- | :--- |
| **AI / Computer Vision** | [cite_start]YOLO, EasyOCR, OpenCV [cite: 728] | [cite_start]Handles object detection, plate reading, and image cleanup[cite: 1051]. |
| **Backend / API** | [cite_start]Python 3.10+, FastAPI [cite: 728] | [cite_start]Powers our high-speed asynchronous API and backend logic[cite: 1046]. |
| **Real-Time Comm.** | [cite_start]Socket.io / WebSockets [cite: 546] | [cite_start]Delivers instant push notifications to the user interface[cite: 546]. |
| **Frontend UI** | [cite_start]Next.js (React), Tailwind CSS [cite: 728] | [cite_start]Runs the command dashboard and manages user access roles[cite: 931, 999]. |
| **Databases** | [cite_start]PostgreSQL, MongoDB [cite: 728] | [cite_start]Stores our core violation logs (PostgreSQL) and flexible archive data (MongoDB)[cite: 1053, 1054]. |
| **Infrastructure** | [cite_start]Docker, Nginx, PM2 [cite: 728] | [cite_start]Keeps the deployment environment containerized and secure[cite: 1062]. |

---

## Repository Structure

```text
vehicle-smoke-detection/
├── ai_core/                 # YOLOv8 inference scripts, Colab notebooks, EasyOCR pipeline
├── backend/                 # FastAPI server, Database models, WebSocket logic
├── frontend/                # React/Next.js UI components, Admin Dashboard pages
├── docs/                    # Project Proposal, Advanced Design Docs (UML, ER Diagrams)
└── README.md