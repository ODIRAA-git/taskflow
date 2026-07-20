export default function Footer() {
  return (
    <footer className="bg-black py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">
        
        <div>
          <h3 className="text-2xl font-bold">
            TaskFlow
          </h3>

          <p className="mt-3 text-gray-400">
            Simplifying project and task management
            for modern teams.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">
            Product
          </h4>

          <ul className="mt-3 space-y-2 text-gray-400">
            <li>Projects</li>
            <li>Tasks</li>
            <li>Dashboard</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">
            Resources
          </h4>

          <ul className="mt-3 space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <span>Github</span>
              <a 
                href="https://github.com/ODIRAA-git" 
                target="_blank"
                rel="noopener noreferrer"
                title="Visit my GitHub"
                className="text-gray-400 hover:text-gray-200 transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.544 2.914 1.186.092-.923.35-1.544.636-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.447-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817a9.568 9.568 0 012.502.336c1.906-1.294 2.743-1.025 2.743-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.138 18.163 20 14.412 20 10c0-5.523-4.477-10-10-10z" clipRule="evenodd"></path>
                </svg>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span>LinkedIn</span>
              <a 
                href="https://www.linkedin.com/in/madu-o-717713216/" 
                target="_blank"
                rel="noopener noreferrer"
                title="Visit my LinkedIn"
                className="text-gray-400 hover:text-gray-200 transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.018-2.277-1.387-2.277-1.39 0-1.601 1.09-1.601 2.277v4.16h-2.678V8h2.678v1.54h.38l.444-.444c1.095-1.095 2.595-2.595 4.388-2.595 3 0 4 1 4 4v8h-3z" clipRule="evenodd"></path>
                </svg>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span>Message</span>
              <a 
                href="mailto:odiraa_perpetua@yahoo.com" 
                title="Send me an email"
                className="text-gray-400 hover:text-gray-200 transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500">
        © 2026 TaskFlow. All rights reserved.
      </div>
    </footer>
  );
}