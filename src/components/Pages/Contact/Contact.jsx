

const Contact = () => {
    return (
        <div>
            <div>
                <h1 className="font-bold text-center text-4xl">We are Here to Help Yo</h1>
                <p className="font-semibold text-center text-lg mt-2">We always want to hear from you!<br /> Let us know how we can best help you and we will do our very best.</p>
            </div>
            <div className="bg-gray-100 flex justify-between">
                <div className="container mx-auto p-4 w-1/2">
                    <h2 className="text-2xl text-center font-semibold mb-4">Contact Us</h2>
                    <form action="your-server-script.php" method="post" className="bg-white p-4 rounded-lg shadow-md">
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600">Your Name:</label>
                            <input type="text" id="name" name="name" required className="w-full px-3 py-2 border rounded-lg" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600">Your Email:</label>
                            <input type="email" id="email" name="email" required className="w-full px-3 py-2 border rounded-lg" />
                        </div>
                        <div className="flex w-full gap-2">
                            <div className="mb-4 w-1/2">
                                <label className="block text-sm font-medium text-gray-600">Message Subject:</label>
                                <input type="text" id="subject" name="subject" required className="w-full px-3 py-2 border rounded-lg" />
                            </div>
                            <div className="mb-4 w-1/2">
                                <label className="block text-sm font-medium text-gray-600">Phone:</label>
                                <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 border rounded-lg" />
                            </div>

                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600">Message:</label>
                            <textarea id="message" name="message" rows="4" required className="w-full px-3 py-2 border rounded-lg"></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600">Verification:</label>
                            <input type="text" id="verification" name="verification" required className="w-full px-3 py-2 border rounded-lg" />
                        </div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">Submit</button>
                    </form>
                </div>

                <div className="grid gap-4 w-1/2 lg:mt-16">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/SRG9Sy3/Capture2.jpg" alt="" />
                    </div>
                    <div className="grid grid-cols-5 gap-4">
                        <div>
                            <img className="h-[82px] max-w-full rounded-lg" src="https://i.ibb.co/CQDpTjX/photo-1503376780353-7e6692767b70.webp" alt="" />
                        </div>
                        <div>
                            <img className="h-[82px] max-w-full rounded-lg" src="https://i.ibb.co/GtFNNBK/istockphoto-156227643red.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-[82px] max-w-full rounded-lg" src="https://i.ibb.co/Nt9gFyR/istockphoto-525941923-612x612.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-[82px] max-w-full rounded-lg" src="https://i.ibb.co/V04fG2L/istockphoto-184289436-612x612.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-[82px] max-w-full rounded-lg" src="https://i.ibb.co/QMW25RN/photo-1532581140115-3e355d1ed1de.webp" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;

