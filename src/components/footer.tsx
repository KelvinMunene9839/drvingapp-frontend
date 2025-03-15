import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import Image from "next/image";

function Footer() {
	return (
		<>
			<div className="bg-gray-50 text-[#3028a7] h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5">
					<ul>
						<div className="relative w-52 h-20 ml-12">
							<Image
								src="/images/logo.jpeg"
								alt="logo"
								layout="fill"
								objectFit="contain"
								priority // Optional: Use priority if this image is critical for the initial render
							/>
						</div>
						<p className="text-[#3028a7] font-bold text-3xl pb-6">
							Trust Driving School
						</p>
						<div className="flex gap-6 pb-5">
							<FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
							<FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
						</div>
					</ul>
				</div>

				<div className="p-5">
					<ul>
						<p className="text-[#3028a7] font-bold text-2xl pb-4">Useful Links</p>
						<li className="text-[#3028a7] text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							<a href="#aboutus">About</a>
						</li>
						<li className="text-[#3028a7] text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							<a href="#ourschedule">Our Schedule</a>
						</li>
						<li className="text-[#3028a7] text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Pricing
						</li>
						<li className="text-[#3028a7] text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							<a href="#contactus">Contact</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center p-5 bg-gray-50">
				<h1 className="text-gray-800 font-semibold">
					©2025 All rights reserved
				</h1>
			</div>
		</>
	);
}

export default Footer;