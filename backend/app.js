const express = require("express");
const cors = require("cors");
const path = require("path"); // Import the path module

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, '../frontend'))); // Serve static files from the 'frontend' folder

// Serve faq_page.html as the default file for "/"
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/faq_page.html')); // Corrected path to 'frontend' folder
});

// API endpoint to get FAQs
app.get("/api/faq", (req, res) => {
    res.json([
        { question: "How do I log my work hours?", answer: "Use the Timesheet module." },
        { question: "How do I create a new project?", answer: "Go to the Projects section." },
        { question: "What is ATS?", answer: "ATS stands for Applicant Tracking System." }
    ]);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
