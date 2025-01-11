function applySidebarRippleEffect() {
    const sidebarItems = document.querySelectorAll('.sidebar li');

    sidebarItems.forEach(item => {
        item.addEventListener('click', function (e) {
            // Remove existing active state
            sidebarItems.forEach(icon => icon.classList.remove('active'));
            this.classList.add('active');

            // Ripple Effect Logic
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            this.appendChild(ripple);

            // Remove ripple after animation
            setTimeout(() => ripple.remove(), 600); // Match animation duration
        });
    });
}

// Call this function on DOM load or whenever the sidebar is updated
applySidebarRippleEffect();


const faqData = {
    general: [
        { question: "How do I log my work hours using the Timesheet module?", answer: "To log your work hours, navigate to the Timesheet module, select the date and task, then submit." },
        { question: "How do I create a new project?", answer: "Navigate to the Projects tab and click 'Create New Project' to start." },
        { question: "What is the difference between a milestone and a task?", answer: "A milestone marks a significant point, while tasks are specific actionable items." },
        { question: "How do I reset my password?", answer: "To reset your password, go to the login screen, click 'Forgot Password?', and follow the instructions." },
        { question: "Can I access the system from my mobile device?", answer: "Yes, the system is fully responsive and accessible via mobile devices." },
        { question: "How do I submit a support ticket?", answer: "Click on 'Support' in the menu, then select 'Submit Ticket' to describe your issue." },
        { question: "How do I view project reports?", answer: "Go to the Reports tab under Projects and select the report type you want to view." },
        { question: "What browsers are supported?", answer: "The platform supports Chrome, Firefox, Edge, and Safari browsers for best performance." },
        { question: "How do I configure notifications in the system?", answer: "You can configure notifications in your profile settings." },
        { question: "How do I delete a project?", answer: "To delete a project, navigate to the project page and click 'Delete'." },
        { question: "Can I track my tasks offline?", answer: "No, the platform requires an internet connection for full functionality." },
        { question: "How do I archive old projects?", answer: "Navigate to the project settings and select 'Archive' to move old projects to storage." },
        { question: "Can I recover deleted tasks?", answer: "Yes, deleted tasks can be recovered from the trash bin within 30 days." },
        { question: "How do I enable two-factor authentication?", answer: "Go to the security settings in your profile and follow the instructions to enable 2FA." },
        { question: "How do I customize my dashboard?", answer: "Navigate to the dashboard settings and choose your layout and widgets." },
        { question: "What file formats are supported for uploads?", answer: "Supported file formats include PDF, DOCX, XLSX, and PNG." }
    ],
    projects: [
        { question: "How do I create a project timeline?", answer: "To create a timeline, navigate to the Projects section, click 'Add Timeline,' and fill in the required details." },
        { question: "How do I assign team members to a project?", answer: "To assign team members, open the project details, click 'Team Members,' and add members from the list." },
        { question: "How do I track project budgets?", answer: "Project budgets can be tracked under the 'Budget' tab in the project settings." },
        { question: "Can I duplicate an existing project?", answer: "Yes, use the 'Duplicate Project' option in the project menu." },
        { question: "How do I set project deadlines?", answer: "Go to the project details page and specify the deadlines in the 'Schedule' section." },
        { question: "What is the best way to monitor project progress?", answer: "Use the Gantt chart or project dashboard for a visual representation of progress." },
        { question: "How do I export project reports?", answer: "Navigate to the 'Reports' tab and click 'Export' to download reports in the desired format." },
        { question: "How can I add milestones to a project?", answer: "Click 'Add Milestone' in the project details page and define the milestone details." },
        { question: "How do I integrate third-party tools into a project?", answer: "Navigate to 'Integrations' under the project settings and connect the desired tools." },
        { question: "Can I link tasks across multiple projects?", answer: "Yes, linked tasks can be created using the 'Dependencies' feature." },
        { question: "How do I view the project summary?", answer: "The project summary is available on the main project dashboard." },
        { question: "How do I add tags to a project?", answer: "Tags can be added in the project settings under the 'Tags' section." },
        { question: "Can I receive notifications for project updates?", answer: "Yes, enable notifications in the project settings under the 'Notifications' tab." },
        { question: "How do I delete a project milestone?", answer: "Milestones can be deleted by clicking 'Edit' and selecting the delete option." },
        { question: "How do I change the project owner?", answer: "Navigate to the project settings and reassign ownership to another team member." },
        { question: "How do I create recurring tasks in a project?", answer: "Recurring tasks can be set up in the 'Tasks' tab by enabling the 'Repeat' option." }
    ],
    ats: [
        { question: "What is an ATS?", answer: "An ATS, or Applicant Tracking System, is a tool used to manage the recruitment process." },
        { question: "How do I post a job on the ATS?", answer: "Navigate to the 'Jobs' section and click 'Post a Job' to fill out the required details." },
        { question: "Can I integrate the ATS with LinkedIn?", answer: "Yes, integration options are available in the 'Integrations' tab under settings." },
        { question: "How do I screen resumes in the ATS?", answer: "Use the 'Resume Screening' feature under the 'Applicants' tab to filter candidates." },
        { question: "What is the best way to schedule interviews?", answer: "Interviews can be scheduled using the calendar tool within the ATS." },
        { question: "How do I generate a recruitment report?", answer: "Recruitment reports can be generated under the 'Reports' tab in the ATS." },
        { question: "Can I automate candidate communication?", answer: "Yes, automation rules can be set in the 'Communication' tab." },
        { question: "How do I customize application forms?", answer: "Application forms can be customized under the 'Forms' section in settings." },
        { question: "How do I track job openings?", answer: "Job openings can be tracked on the dashboard under the 'Open Positions' section." },
        { question: "Can I export applicant data?", answer: "Yes, applicant data can be exported from the 'Applicants' tab." },
        { question: "How do I handle duplicate applications?", answer: "Duplicate applications are flagged and can be merged under the 'Duplicates' section." },
        { question: "Can I archive old job postings?", answer: "Yes, job postings can be archived by selecting the archive option under the job details." },
        { question: "How do I rate candidates in the ATS?", answer: "Candidates can be rated in the 'Applicants' tab using the rating stars feature." },
        { question: "How do I create interview templates?", answer: "Templates can be created under the 'Interview Templates' section in settings." },
        { question: "Can I set permissions for the ATS?", answer: "Yes, permissions can be managed in the 'User Permissions' tab under settings." },
        { question: "How do I create custom recruitment stages?", answer: "Custom stages can be added in the 'Pipeline' settings under the 'Recruitment Process' tab." }
    ],
    finance: [
        { question: "How do I track expenses in the system?", answer: "Use the 'Expenses' tab to log and monitor all expenses." },
        { question: "Can I generate invoices?", answer: "Yes, invoices can be generated in the 'Billing' section of the Finance module." },
        { question: "How do I set up budgets for a project?", answer: "Navigate to the project settings and set a budget under the 'Finance' tab." },
        { question: "How do I track income and expenses?", answer: "Income and expenses can be tracked in the 'Finance Dashboard' under 'Reports'." },
        { question: "Can I export financial reports?", answer: "Yes, financial reports can be exported in PDF or Excel formats." },
        { question: "How do I add a payment method?", answer: "Payment methods can be added under the 'Settings' tab in the Finance module." },
        { question: "How do I reconcile transactions?", answer: "Transaction reconciliation can be done in the 'Reconciliation' tab." },
        { question: "What currencies are supported?", answer: "The system supports USD, EUR, GBP, and other major currencies." },
        { question: "Can I track overdue payments?", answer: "Yes, overdue payments are flagged in the 'Payments' section." },
        { question: "How do I set up recurring payments?", answer: "Recurring payments can be configured in the 'Billing' tab under 'Recurring Payments'." },
        { question: "How do I handle refunds?", answer: "Refunds can be processed under the 'Payments' section by selecting the specific transaction." },
        { question: "Can I categorize transactions?", answer: "Yes, transactions can be categorized under 'Finance Settings'." },
        { question: "How do I view audit logs for finance?", answer: "Audit logs are available under 'Finance Logs' in the 'Reports' section." },
        { question: "How do I add a tax rate?", answer: "Tax rates can be added in the 'Tax Settings' under the Finance module." },
        { question: "Can I split payments?", answer: "Yes, payments can be split by enabling the 'Split Payment' option in the payment settings." },
        { question: "How do I track profit and loss?", answer: "Profit and loss can be tracked using the 'Profit & Loss' report in the Finance dashboard." }
    ],
    timesheet: [
        { question: "How do I log my working hours?", answer: "Navigate to the Timesheet tab and fill in your daily hours." },
        { question: "Can I edit my logged hours?", answer: "Yes, logged hours can be edited under the 'My Timesheets' section." },
        { question: "How do I approve timesheets?", answer: "Managers can approve timesheets in the 'Approval' section." },
        { question: "Can I view my weekly summary?", answer: "Yes, weekly summaries are available in the 'Weekly Overview' section." },
        { question: "How do I submit my timesheet?", answer: "Timesheets can be submitted by clicking the 'Submit' button in the Timesheet tab." },
        { question: "What happens if my timesheet is rejected?", answer: "You will receive a notification and can resubmit after corrections." },
        { question: "Can I track overtime hours?", answer: "Yes, overtime hours are logged separately in the Timesheet module." },
        { question: "How do I view my historical timesheets?", answer: "Historical timesheets are available under the 'History' tab." },
        { question: "How do I add comments to a timesheet?", answer: "Comments can be added in the 'Notes' section of the timesheet." },
        { question: "Can I export my timesheets?", answer: "Yes, timesheets can be exported as Excel or PDF files." },
        { question: "How do I handle public holidays?", answer: "Public holidays are automatically accounted for in the system." },
        { question: "How do I log hours for multiple projects?", answer: "Select the project from the dropdown in the Timesheet tab before logging hours." },
        { question: "Can I log hours retroactively?", answer: "Yes, past hours can be logged within the allowable period set by the admin." },
        { question: "How do I delete a timesheet entry?", answer: "Entries can be deleted by clicking the 'Delete' button next to the entry." },
        { question: "How do I track billable vs. non-billable hours?", answer: "Use the 'Billable' toggle in the Timesheet tab to differentiate hours." },
        { question: "How do I notify my manager about changes?", answer: "Notifications can be sent automatically upon resubmission of the timesheet." }
    ],
    crm: [
        { question: "What is CRM?", answer: "CRM stands for Customer Relationship Management, used to manage customer interactions." },
        { question: "How do I add a new lead?", answer: "Leads can be added under the 'Leads' tab by clicking 'Add Lead'." },
        { question: "Can I track sales pipelines?", answer: "Yes, pipelines can be tracked under the 'Pipelines' tab in the CRM module." },
        { question: "How do I assign leads to team members?", answer: "Leads can be assigned under the 'Leads' tab by selecting a team member." },
        { question: "How do I import contacts?", answer: "Contacts can be imported using the 'Import Contacts' feature in the CRM module." },
        { question: "Can I automate follow-ups?", answer: "Yes, follow-ups can be automated in the 'Automation' section of the CRM module." },
        { question: "How do I create email campaigns?", answer: "Email campaigns can be created under the 'Campaigns' tab." },
        { question: "How do I view customer analytics?", answer: "Analytics are available under the 'Analytics' tab in the CRM module." },
        { question: "How do I track deal stages?", answer: "Deal stages can be tracked in the 'Deals' section of the CRM module." },
        { question: "Can I integrate the CRM with other tools?", answer: "Yes, integrations can be configured under the 'Settings' tab." },
        { question: "How do I handle customer complaints?", answer: "Complaints can be logged under the 'Support' tab and tracked for resolution." },
        { question: "How do I export CRM data?", answer: "Data can be exported from the 'Export Data' section under 'Settings'." },
        { question: "Can I view historical interactions with customers?", answer: "Yes, historical interactions are available in the customer profile under 'Interactions'." },
        { question: "How do I set reminders for customer follow-ups?", answer: "Reminders can be set in the 'Follow-ups' section of the CRM module." },
        { question: "Can I track customer satisfaction?", answer: "Customer satisfaction can be tracked using surveys available in the 'Surveys' tab." },
        { question: "How do I configure CRM settings?", answer: "CRM settings can be configured under the 'Settings' tab in the CRM module." }
    ],
    hr: [
        { question: "How do I view my payslip?", answer: "Payslips are available under the 'Payroll' section in the HR module." },
        { question: "Can I apply for leave?", answer: "Yes, leave applications can be submitted under the 'Leave' tab in the HR module." },
        { question: "How do I update my personal details?", answer: "Personal details can be updated in the 'My Profile' section of the HR module." },
        { question: "How do I view company policies?", answer: "Company policies are available under the 'Policies' section in the HR module." },
        { question: "How do I submit a resignation?", answer: "Resignations can be submitted under the 'Resignation' tab in the HR module." },
        { question: "Can I track my leave balance?", answer: "Yes, leave balances are visible in the 'Leave Balance' section of the HR module." },
        { question: "How do I update my emergency contacts?", answer: "Emergency contacts can be updated in the 'My Profile' section under 'Contacts'." },
        { question: "How do I view my attendance records?", answer: "Attendance records are available under the 'Attendance' tab in the HR module." },
        { question: "Can I request a salary advance?", answer: "Yes, salary advances can be requested under the 'Payroll' section." },
        { question: "How do I access training materials?", answer: "Training materials are available under the 'Training' tab in the HR module." },
        { question: "How do I handle grievances?", answer: "Grievances can be submitted under the 'Support' tab and tracked for resolution." },
        { question: "How do I access the HR contact details?", answer: "HR contact details are available under the 'Contact' tab in the HR module." },
        { question: "How do I nominate a colleague for recognition?", answer: "Nominations can be submitted under the 'Recognition' section." },
        { question: "Can I download my performance reviews?", answer: "Yes, performance reviews can be downloaded from the 'Reviews' tab in the HR module." },
        { question: "How do I update my bank details?", answer: "Bank details can be updated in the 'Payroll' section under 'Bank Details'." },
        { question: "How do I provide feedback to HR?", answer: "Feedback can be submitted under the 'Feedback' tab in the HR module." }
    ]
};
document.getElementById('faq-search').addEventListener('input', function (e) {
    const query = e.target.value.toLowerCase();
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (query === '') {
        resultsContainer.style.display = 'none'; // Hide results when input is empty
        return;
    }

    resultsContainer.style.display = 'block'; // Show results container
    let results = [];

    // Search through all categories
    for (let category in faqData) {
        faqData[category].forEach((faq) => {
            if (faq.question.toLowerCase().includes(query)) {
                results.push({ ...faq, category });
            }
        });
    }

    // Display results
    if (results.length > 0) {
        results.forEach((result) => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.innerHTML = `
                <p><strong>${result.question}</strong></p>
                <p class="category-label">Category: ${result.category}</p>
            `;
            resultsContainer.appendChild(resultItem);
        });
    } else {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    }
});

/*----------------------------------*/




function renderFAQs(category, page = 1) {
    const faqContainer = document.querySelector(".faq-list");

    // Start fade-out effect
    faqContainer.classList.remove("fade-in");
    
    // Wait for the fade-out effect to finish
    setTimeout(() => {
        faqContainer.innerHTML = ""; // Clear existing FAQs

        const itemsPerPage = 8;
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = page * itemsPerPage;

        const selectedFAQs = faqData[category].slice(startIndex, endIndex);
        selectedFAQs.forEach((faq, index) => {
            const faqItem = document.createElement("div");
            faqItem.classList.add("faq-item");
            faqItem.innerHTML = `
                <h3 class="faq-question">${faq.question} 
                    <span class="toggle-icon">
                        <img src="plus-icon.png" class="icon plus-icon">
                        <img src="minus-icon.png" class="icon minus-icon">
                    </span>
                </h3>
                <p class="faq-answer">${faq.answer}</p>
            `;
            faqContainer.appendChild(faqItem);
        });

        // Reapply the FAQ toggle logic
        addFAQToggleLogic();

        // Trigger fade-in effect
        faqContainer.classList.add("fade-in");
    }, 300); // Matches the CSS transition duration (0.3s)
}

// Tabs Functionality
const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove 'active' class from all tabs
        tabs.forEach(t => t.classList.remove('active'));

        // Add 'active' class to the clicked tab
        tab.classList.add('active');

        // Get the target category from the clicked tab
        const targetCategory = tab.dataset.target;

        // Render FAQs for the selected category and reset pagination
        renderFAQs(targetCategory, 1); // Pass category and page number
        showPage(1); // Reset pagination to the first page
    });
});


// Initially load General tab
document.addEventListener("DOMContentLoaded", () => {
    renderFAQs("general");
    showPage(1);
});
document.addEventListener("DOMContentLoaded", () => {
    const paginationButtons = document.querySelectorAll(".pagination button");
    const itemsPerPage = 8; // Number of items per page

    let currentPage = 1;
    let currentCategory = "general";

    const showPage = (page) => {
        renderFAQs(currentCategory, page);
        paginationButtons.forEach(btn => btn.classList.remove("active"));
        paginationButtons.forEach(btn => {
            if (parseInt(btn.textContent) === page) {
                btn.classList.add("active");
            }
        });
        currentPage = page;
    };

    paginationButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const buttonContent = button.textContent;

            if (buttonContent === "«") {
                showPage(1); // Go to the first page
            } else if (buttonContent === "»") {
                showPage(Math.ceil(faqData[currentCategory].length / itemsPerPage)); // Last page
            } else if (buttonContent === "<") {
                if (currentPage > 1) showPage(currentPage - 1); // Previous page
            } else if (buttonContent === ">") {
                if (currentPage < Math.ceil(faqData[currentCategory].length / itemsPerPage)) showPage(currentPage + 1); // Next page
            } else {
                const page = parseInt(buttonContent);
                if (!isNaN(page)) showPage(page); // Go to clicked page
            }
        });
    });

    // Initially show the first page
    showPage(1);
});
function addFAQToggleLogic() {
    document.querySelectorAll(".faq-item").forEach(item => {
        const toggleIcon = item.querySelector('.toggle-icon');
        const answer = item.querySelector('.faq-answer');

        item.addEventListener('click', () => {
            item.classList.toggle('open');

            if (item.classList.contains('open')) {
                toggleIcon.querySelector('.plus-icon').style.display = "none";
                toggleIcon.querySelector('.minus-icon').style.display = "inline";
                answer.style.maxHeight = answer.scrollHeight + "px"; // Expand
            } else {
                toggleIcon.querySelector('.plus-icon').style.display = "inline";
                toggleIcon.querySelector('.minus-icon').style.display = "none";
                answer.style.maxHeight = null; // Collapse
            }
        });
    });
}

// Add toggle logic initially
// Fetch FAQs from the backend and render them dynamically
async function fetchFAQs() {
    try {
        const response = await fetch('http://localhost:5000/api/faq'); // Backend API endpoint
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); // Parse the JSON response
        console.log("Fetched FAQs:", data); // Log the data for debugging

        // Select the FAQ container
        const faqContainer = document.querySelector(".faq-list");

        // Clear any existing FAQ content
        faqContainer.innerHTML = "";

        // Render each FAQ dynamically
        data.forEach(faq => {
            const faqItem = document.createElement("div");
            faqItem.classList.add("faq-item");
            faqItem.innerHTML = `
                <h3 class="faq-question">${faq.question}</h3>
                <p class="faq-answer">${faq.answer}</p>
            `;
            faqContainer.appendChild(faqItem);
        });
    } catch (error) {
        console.error("Error fetching FAQs:", error); // Log any errors
    }
}

// Fetch FAQs when the page loads
document.addEventListener("DOMContentLoaded", fetchFAQs);
