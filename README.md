# AI-Based Real-Time Vehicle Smoke Detection and Reporting System

![Build Status](https://img.shields.io/badge/Status-Development-orange)
![Python](https://img.shields.io/badge/Python-3.10+-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-High_Performance-009688)
![YOLO](https://img.shields.io/badge/AI-Ultralytics_YOLOv8-yellow)
![React](https://img.shields.io/badge/Frontend-React_18-61DAFB)

This project is a non-invasive surveillance system designed to help automate environmental law enforcement without needing new hardware. It works by tapping into existing IP-based traffic cameras to spot visible vehicle smoke emissions in real-time.

Developed as a Capstone Project (Deliverable 2) at the **Faculty of Computing & Information Technology, University of the Punjab, Lahore**.

---

## The Problem

Major cities are dealing with severe air quality issues, heavily driven by vehicle emissions. Right now, traffic authorities mostly rely on manual, subjective observations, which means existing camera networks aren't being used to their full potential for environmental protection. Without an automated system, heavy polluters—often called "super-emitters"—can easily slip by unnoticed.

## The Solution

We built a real-time AI surveillance pipeline that integrates directly with standard RTSP traffic cameras[cite: 701, 704]. By combining deep learning object detection with Optical Character Recognition (OCR), the system creates a fully automated workflow from detection to reporting[cite: 957].

### Core Features

- **Dynamic Smoke Inference Module (DSIM):** A custom-trained YOLO neural network built specifically to detect tricky, semi-transparent exhaust smoke with over 85% confidence.
- **Automatic License Plate Recognition (ALPR):** When smoke is detected, the system zeroes in on the vehicle, cleans up the image using OpenCV filters, and reads the license plate using EasyOCR.
- **Temporal Majority Filter (Consensus Filter):** A backend logic check that makes sure the smoke is consistent across multiple frames, weeding out false alarms like dust or shadows.
- **Asynchronous Real-Time Alerts:** Using WebSockets, our FastAPI backend pushes confirmed violations straight to a React dashboard in under 100 milliseconds, so officers don't even have to refresh the page.
- **Integrity Shield:** We cryptographically link the officer's `integrity_token` to the evidence, guaranteeing the data hasn't been tampered with.
- **Soft-Delete Architecture (Recycle Bin):** Accidental clicks happen, so deleted records aren't permanently erased right away. Instead, we toggle an `is_deleted` flag, giving admins a 30-day window to recover the data.
- **Emission Health Scoring:** The system keeps a running score to identify "Super-Emitters"—vehicles that repeatedly trigger the smoke detection system.

---

## Technical Validation & Performance

To prove it works in the real world, the AI model was tested and validated by the Safe City Authority using a dataset of **58,000 labeled images**.

- **Mean Average Precision (mAP@0.50):** 91.22%.
- **Precision:** 95.71%.
- **Inference Speed:** 23.2 ms (Enabling live video processing at ~43 frames per second).
- **High-Risk Emissions:** 100% recall on black smoke capture.

---

## Technology Stack

| Category                 | Technology                                            | Usage                                                                                                          |
| :----------------------- | :---------------------------------------------------- | :------------------------------------------------------------------------------------------------------------- |
| **AI / Computer Vision** | YOLO, EasyOCR, OpenCV          | Handles object detection, plate reading, and image cleanup.                            |
| **Backend / API**        | Python 3.10+, FastAPI [cite: 728]         | Powers our high-speed asynchronous API and backend logic[cite: 1046].                              |
| **Real-Time Comm.**      | Socket.io / WebSockets [cite: 546]        | Delivers instant push notifications to the user interface[cite: 546].                              |
| **Frontend UI**          | Next.js (React), Tailwind CSS [cite: 728] | Runs the command dashboard and manages user access roles[cite: 931, 999].                          |
| **Databases**            | PostgreSQL, MongoDB [cite: 728]           | Stores our core violation logs (PostgreSQL) and flexible archive data (MongoDB)[cite: 1053, 1054]. |
| **Infrastructure**       | Docker, Nginx, PM2 [cite: 728]            | Keeps the deployment environment containerized and secure[cite: 1062].                             |

---

## Repository Structure

```text
vehicle-smoke-detection/
├── ai_core/                 # YOLOv8 inference scripts, Colab notebooks, EasyOCR pipeline
├── backend/                 # FastAPI server, Database models, WebSocket logic
├── frontend/                # React/Next.js UI components, Admin Dashboard pages
├── docs/                    # Project Proposal, Advanced Design Docs (UML, ER Diagrams)
└── README.md
```
