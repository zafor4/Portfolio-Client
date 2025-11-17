import * as actionTypes from "./ActionTypes";
import img1 from "../assets/images/bhubanmajhi.png";
import img2 from "../assets/images/zaarishkids.jpg";

const INITIAL_STATE = {
  projects: [
    {
      _id: "1",
      name: "✈️ Bhuban Majhi – Travel & Booking Platform",
      description: `<p><strong style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">Bhuban Majhi</strong><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);"> is a comprehensive </span><strong style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">travel and booking platform</strong><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);"> built using </span><strong style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">Next.js</strong><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">, </span><strong style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">TypeScript</strong><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">, </span><strong style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">Express.js, MongoDB</strong><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">.</span></p><p><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">The platform allows users to easily </span><strong style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">book tours, hotels, flights, and visa services</strong><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);"> — offering a unified solution for travelers.</span></p><p><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">An integrated </span><strong style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">admin panel</strong><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);"> enables efficient management of bookings, users, and service listings in real time.</span></p><p><br></p><p><br></p><h3><strong style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">Objectives</strong></h3><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">Create a modern, full-featured travel platform with seamless booking functionality</span></li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">Implement a </span><strong style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">TypeScript-based</strong><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);"> architecture for better scalability and maintainability</span></li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">Provide a </span><strong style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">secure admin dashboard</strong><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);"> for managing all travel services and customer data</span></li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">Deliver a </span><strong style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">fast, SEO-friendly</strong><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);"> application using </span><strong style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">Next.js server-side rendering</strong></li></ol><h3><br></h3><h3><br></h3><h3><strong style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">Key Features</strong></h3><p><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">✅ </span><strong style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">Tour, Hotel, Flight &amp; Visa Booking System</strong><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);"> – One-stop solution for all travel needs</span></p><p><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">✅ </span><strong style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">Next.js + TypeScript</strong><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);"> – Strongly typed, scalable, and high-performing frontend</span></p><p><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">✅ </span><strong style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">Admin Dashboard</strong><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);"> – Manage services, users, bookings, and transactions</span></p><p><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">✅ </span><strong style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">Authentication &amp; Authorization</strong><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);"> – Secure login system with JWT</span></p><p><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">✅ </span><strong style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">Dynamic Search &amp; Filters</strong><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);"> – Users can easily find and sort travel options</span></p><p><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">✅ </span><strong style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">Responsive UI</strong><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);"> – Fully optimized for mobile, tablet, and desktop</span></p><p><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">✅ </span><strong style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">Real-Time Updates</strong><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);"> – Booking and admin data synced dynamically via API</span></p><p><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">✅ </span><strong style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">SEO Optimized</strong><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);"> – Next.js SSR for improved visibility and performance</span></p><h3><br></h3><h3><br></h3><h3><strong style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">Tech Stack</strong></h3><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">Frontend:</strong><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);"> Next.js, React, TypeScript, Tailwind CSS</span></li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">Backend:</strong><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);"> Node.js, Express.js</span></li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">Database:</strong><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);"> MongoDB</span></li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">Authentication:</strong><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);"> JWT, bcrypt.js</span></li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">State Management:</strong><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);"> Context API</span></li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">Deployment:</strong><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);"> Vercel (frontend) &amp; Microsoft Azure (backend)</span></li></ol><h3><br></h3><h3><br></h3><h3><strong style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">Result</strong></h3><p><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">The </span><strong style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">Bhuban Majhi</strong><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);"> platform delivers a </span><strong style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">modern, fast, and secure travel booking experience</strong><span style="background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);">, empowering users to plan complete trips in one place while enabling administrators to manage all operations through an intuitive dashboard</span></p><p><br></p>`,
      category: "Web(MERN)",
      photo: img1,
      client: "https://github.com/zaforIq/bhubannajhiclient",
      server: "https://github.com/zaforIq/travelagencybackend",
      preview: "https://bhubannajhiclient.vercel.app/",
      highlight: true,
    },
    {
      _id: "2",
      name: "🍼 Zaarish Kids – E-Commerce Platform for Baby Fashion & Accessories",
      description: `<p><strong style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">Zaarish Kids</strong><span style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\"> is a modern and playful </span><strong style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">e-commerce website</strong><span style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\"> built using </span><strong style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">WordPress</strong><span style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">, </span><strong style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">WooCommerce</strong><span style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">, and </span><strong style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">Elementor</strong><span style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">.</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">The platform offers a delightful shopping experience for parents looking to buy </span><strong style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">baby dresses, toys, watches, sunglasses, and accessories</strong><span style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\"> — all from one easy-to-use online store.</span></p><h3><br></h3><h3><br></h3><h3><strong style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">Objectives</strong></h3><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">Design a clean, child-friendly interface with intuitive navigation</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">Build a secure and scalable online store using WooCommerce</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">Ensure full mobile responsiveness and smooth user experience</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">Optimize for performance, SEO, and easy content management</span></li></ol><h3><br></h3><h3><br></h3><h3><strong style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">Key Features</strong></h3><p><span style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">✅ </span><strong style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">Fully Responsive Design</strong><span style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\"> – Works seamlessly across all devices</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">✅ </span><strong style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">WooCommerce Integration</strong><span style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\"> – Product catalog, cart, and checkout system</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">✅ </span><strong style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">Custom Elementor Layouts</strong><span style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\"> – Visually engaging homepage and product pages</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">✅ </span><strong style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">Product Filtering &amp; Search</strong><span style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\"> – Enhanced browsing experience</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">✅ </span><strong style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">Wishlist &amp; Secure Payment Gateway</strong><span style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\"> – Smooth and safe shopping process</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">✅ </span><strong style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">SEO &amp; Speed Optimization</strong><span style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\"> – Fast loading and better visibility on search engines</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">✅ </span><strong style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">Easy Backend Management</strong><span style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\"> – Add, edit, and track products effortlessly</span></p><h3><br></h3><h3><br></h3><h3><strong style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">Tech Stack</strong></h3><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">CMS:</strong><span style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\"> WordPress</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">E-Commerce:</strong><span style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\"> WooCommerce</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">Page Builder:</strong><span style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\"> Elementor</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">Languages:</strong><span style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\"> HTML, CSS, PHP</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><strong style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">Plugins:</strong><span style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\"> Yoast SEO, Jetpack, WooCommerce Payments</span></li></ol><h3><br></h3><h3><br></h3><h3><strong style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">Result</strong></h3><p><span style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">The final website delivers a </span><strong style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\">user-friendly, fast, and visually appealing online store</strong><span style=\"background-color: rgb(255, 255, 255); color: rgba(0, 0, 0, 0.87);\"> that reflects the fun and premium nature of the Zaarish Kids brand — helping parents shop confidently for their little ones.</span></p><p><br></p>`,

      category: "Web(CMS)",
      photo: img2,
      client: "",
      server: "",
      preview: "https://zaarishkids.com/",
      highlight: true,
    },
  ],
  articles: [],
  article: {},
  project: {},
  messages: [],
  token: null,
  user: {},
  loading: false,
  authFailedMsg: null,
  mode: "light",
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_MODE:
      const newMode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("mode", newMode);
      return {
        ...state,
        mode: newMode,
      };
    case actionTypes.MODE_CHECK:
      return {
        ...state,
        mode: action.payload,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case actionTypes.AUTH_LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
      };
    case actionTypes.ADD_PROJECTS: {
      // Merge fetched projects with local seed projects, avoid duplicates by _id
      const fetched = action.payload || [];
      const existingById = state.projects.reduce((acc, p) => {
        acc[p._id] = p;
        return acc;
      }, {});
      fetched.forEach((fp) => {
        existingById[fp._id] = fp;
      });
      return {
        ...state,
        projects: Object.values(existingById),
      };
    }

    case actionTypes.ADD_Articles:
      return {
        ...state,
        articles: action.payload,
      };
    case actionTypes.ADD_INDIVIDUAL_Article:
      return {
        ...state,
        article: action.payload,
      };
    case actionTypes.ADD_INDIVIDUAL_PROJECT:
      return {
        ...state,
        project: action.payload,
      };
    case actionTypes.ADD_MESSAGE:
      return {
        ...state,
        messages: action.payload,
      };
    default:
      return state;
  }
};
