import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("メッセージを送信しました！");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-16 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <h1 className="text-white mb-4 text-6xl">Contact</h1>
          <p className="text-xl opacity-90">お気軽にお問い合わせください</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="mb-6 text-gray-800">Get In Touch</h2>
              <p className="mb-8 leading-relaxed text-gray-600">
                プロジェクトについて相談したい、または何かご質問がございましたら、
                お気軽にお問い合わせください。24時間以内にご返信いたします。
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-2xl mr-4">
                    📧
                  </div>
                  <div>
                    <h3 className="text-gray-800 font-semibold">Email</h3>
                    <p className="text-gray-600">contact@example.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-2xl mr-4">
                    📱
                  </div>
                  <div>
                    <h3 className="text-gray-800 font-semibold">Phone</h3>
                    <p className="text-gray-600">+81 90-1234-5678</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-2xl mr-4">
                    📍
                  </div>
                  <div>
                    <h3 className="text-gray-800 font-semibold">Location</h3>
                    <p className="text-gray-600">Tokyo, Japan</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-vertical"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-block px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg transition-all duration-300 border-none cursor-pointer text-base hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-500/30"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
