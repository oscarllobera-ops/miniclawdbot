import { Testimonial, FaqItem } from './types';

export const PAYMENT_LINK = "https://wise.com/pay/r/EGwiHwKBGljW7NY";

export const IMAGES = {
  LOGO: "https://i.ibb.co/B24T9YJL/mini-cl-logo.png",
  BANNER: "https://i.ibb.co/jvTmQ0F3/Chat-GPT-Image-2-feb-2026-14-40-30.png",
  MAP: "https://i.ibb.co/gMVsypGZ/Chat-GPT-Image-2-feb-2026-15-21-29.png",
};

export const LEGAL = {
  PRIVACY: `
    <h3 class="font-bold text-lg mb-2">Privacy Policy</h3>
    <p class="mb-2 text-sm text-gray-500">Last updated: 2 February 2026</p>
    <p class="mb-4">This Privacy Policy describes how Jajo Consult Beheer B.V. (“we”, “us”, or “our”) collects, uses, and protects your personal data when you use our services, websites, products, or digital platforms, including but not limited to MiniClawdBot-related services.</p>
    
    <h4 class="font-bold mt-4 mb-2">1. Company Information</h4>
    <p class="mb-2">Legal name: Jajo Consult Beheer B.V.<br/>
    Trade name: Jajo Consult Beheer B.V.<br/>
    Legal form: Private Limited Company (Besloten Vennootschap)<br/>
    Chamber of Commerce (KvK): 77933877<br/>
    Establishment number: 000045595569<br/>
    Registered activities: Management consultancy and business operations (non-financial holding activities)<br/>
    Contact email: info@miniclawdbot.com</p>

    <h4 class="font-bold mt-4 mb-2">2. Personal Data We Collect</h4>
    <p class="mb-2">We may collect and process the following personal data:</p>
    <ul class="list-disc pl-5 mb-2">
      <li>Name or username</li>
      <li>Email address</li>
      <li>Technical data such as IP address, browser type, device information</li>
      <li>Usage data related to our website, applications, or digital products</li>
      <li>Communication data when you contact us by email or other channels</li>
    </ul>
    <p class="mb-2">We do not intentionally collect sensitive personal data.</p>

    <h4 class="font-bold mt-4 mb-2">3. How We Use Your Data</h4>
    <p class="mb-2">Your personal data is processed for the following purposes:</p>
    <ul class="list-disc pl-5 mb-2">
      <li>Providing and maintaining our services</li>
      <li>Granting access to digital products or platforms</li>
      <li>Communicating with users</li>
      <li>Improving functionality and user experience</li>
      <li>Legal, administrative, and security purposes</li>
    </ul>
    <p class="mb-2">Processing is based on legitimate interest, contractual necessity, or your consent where applicable.</p>

    <h4 class="font-bold mt-4 mb-2">4. Data Sharing</h4>
    <p class="mb-2">We do not sell or rent your personal data. Data may only be shared with:</p>
    <ul class="list-disc pl-5 mb-2">
      <li>Technical service providers (hosting, analytics, email services)</li>
      <li>Authorities if legally required</li>
    </ul>
    <p class="mb-2">All third parties are required to handle data securely and confidentially.</p>

    <h4 class="font-bold mt-4 mb-2">5. Data Retention</h4>
    <p class="mb-2">We retain personal data only as long as necessary for the purposes described or as required by law. Data may be anonymized or deleted once it is no longer needed.</p>

    <h4 class="font-bold mt-4 mb-2">6. Cookies and Tracking</h4>
    <p class="mb-2">Our website may use cookies or similar technologies for functionality and analytics. You may disable cookies through your browser settings.</p>

    <h4 class="font-bold mt-4 mb-2">7. Your Rights</h4>
    <p class="mb-2">Under applicable data protection laws (including GDPR), you have the right to:</p>
    <ul class="list-disc pl-5 mb-2">
      <li>Access your personal data</li>
      <li>Request correction or deletion</li>
      <li>Object to or restrict processing</li>
      <li>Withdraw consent where applicable</li>
    </ul>
    <p class="mb-2">Requests can be sent to info@miniclawdbot.com.</p>

    <h4 class="font-bold mt-4 mb-2">8. Data Security</h4>
    <p class="mb-2">We implement appropriate technical and organizational measures to protect personal data against unauthorized access, loss, or misuse.</p>

    <h4 class="font-bold mt-4 mb-2">9. Changes to This Policy</h4>
    <p class="mb-2">We may update this Privacy Policy from time to time. The latest version will always be available on our website.</p>
  `,
  TERMS: `
    <h3 class="font-bold text-lg mb-2">Terms and Conditions</h3>
    <p class="mb-2 text-sm text-gray-500">Last updated: 2 February 2026</p>
    <p class="mb-4">These Terms and Conditions apply to all services, digital products, and platforms provided by Jajo Consult Beheer B.V.</p>

    <h4 class="font-bold mt-4 mb-2">1. Company Details</h4>
    <p class="mb-2">Legal entity: Jajo Consult Beheer B.V.<br/>
    KvK number: 77933877<br/>
    Email: info@miniclawdbot.com</p>

    <h4 class="font-bold mt-4 mb-2">2. Scope of Services</h4>
    <p class="mb-2">We provide digital services, software tools, online platforms, advisory services, and digital products. Unless explicitly stated otherwise, all services are provided electronically.</p>

    <h4 class="font-bold mt-4 mb-2">3. Access and Use</h4>
    <p class="mb-2">You agree to use our services lawfully and responsibly. You may not:</p>
    <ul class="list-disc pl-5 mb-2">
      <li>Use the services for illegal activities</li>
      <li>Attempt to disrupt or compromise systems</li>
      <li>Copy, resell, or redistribute digital products unless explicitly permitted</li>
    </ul>
    <p class="mb-2">Access may be suspended or terminated in case of misuse.</p>

    <h4 class="font-bold mt-4 mb-2">4. Digital Products and Access</h4>
    <p class="mb-2">Where access to digital products or platforms is granted (including lifetime or long-term access), this access remains valid for as long as the company continues its operations, unless terminated earlier due to misuse or legal obligations.</p>

    <h4 class="font-bold mt-4 mb-2">5. Payments and Refunds</h4>
    <p class="mb-2">Unless stated otherwise:</p>
    <ul class="list-disc pl-5 mb-2">
      <li>All payments are final</li>
      <li>No refunds are provided for digital products once access is granted</li>
      <li>Prices may change for future offerings</li>
    </ul>

    <h4 class="font-bold mt-4 mb-2">6. Intellectual Property</h4>
    <p class="mb-2">All content, software, designs, logos, and materials are the intellectual property of Jajo Consult Beheer B.V., unless stated otherwise. Unauthorized use is prohibited.</p>

    <h4 class="font-bold mt-4 mb-2">7. Liability</h4>
    <p class="mb-2">We provide services on an “as-is” basis. To the maximum extent permitted by law:</p>
    <ul class="list-disc pl-5 mb-2">
      <li>We are not liable for indirect or consequential damages</li>
      <li>We do not guarantee uninterrupted or error-free services</li>
      <li>Use of our services is at your own risk</li>
    </ul>

    <h4 class="font-bold mt-4 mb-2">8. Availability and Changes</h4>
    <p class="mb-2">We reserve the right to modify, suspend, or discontinue any service or feature at any time without prior notice.</p>

    <h4 class="font-bold mt-4 mb-2">9. Governing Law</h4>
    <p class="mb-2">These Terms are governed by the laws of the Netherlands. Any disputes shall be submitted to the competent court in the Netherlands.</p>

    <h4 class="font-bold mt-4 mb-2">10. Contact</h4>
    <p class="mb-2">For questions regarding these Terms or our services, contact: info@miniclawdbot.com</p>
  `
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Senior Automation Engineer",
    avatar: "https://picsum.photos/100/100?random=1",
    content: "Moving my Moltbot to this VPS was a game changer. The 24/7 uptime means I never miss a trigger on my Discord community. Setup was instant.",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Startup Founder",
    avatar: "https://picsum.photos/100/100?random=2",
    content: "I needed a reliable backend for our customer support AI. The global reach ensures latency is minimal for our European clients. Absolutely worth it.",
  },
  {
    id: 3,
    name: "Marcus J.",
    role: "Freelance Developer",
    avatar: "https://picsum.photos/100/100?random=3",
    content: "The free weekly backups and Kodee AI assistant are lifesavers. It's not just hosting; it's a complete toolkit for managing my Clawdbot instances.",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "What is Clawdbot and why run it on a VPS?",
    answer: "Moltbot (Clawdbot) is your always-on personal AI assistant for platforms like WhatsApp, Telegram, and Discord. Hosting it on our VPS transforms it from a local script into a robust, 24/7 backend service that never sleeps, even when your computer does.",
  },
  {
    question: "Why choose VPS hosting over my local machine?",
    answer: "Your local machine needs to sleep, restart, or travel. A VPS provides a stable public IP and 99.9% uptime. It isolates your automation environment, ensuring consistent performance regardless of your local internet or power status.",
  },
  {
    question: "How much control do I have?",
    answer: "Complete control. You get full root access to your environment. Install dependencies, customize security rules, and configure integrations exactly how you need them. You manage the full stack.",
  },
  {
    question: "Is this suitable for scaling?",
    answer: "Absolutely. With dedicated CPU, RAM, and NVMe storage, your assistant handles high loads effortlessly. As your needs grow, upgrading your plan is seamless, ensuring your AI scales with your ambition.",
  },
];