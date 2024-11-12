import Link from "next/link";

export default function Footer() {
    return (
      <footer className="bg-pin0k-90 text-white py-6 border-t-2 border-cyan-500 shadow-[0_4px_20px_rgba(0,255,255,0.6)] shadow-cyan-500">
        <div className="container mx-auto text-center">
          <p className="text-sm mb-2">
            &copy; {new Date().getFullYear()} Anum Munir. All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-4 font-semibold">
            <Link
              href="https://github.com/iamanum"
              className="text-white hover:text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text transition font-serif"
              target="_blank" rel="noopener noreferrer"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/anum-munir-52444624a/"
              className="text-white hover:text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text transition font-serif"
              target="_blank" rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              href="email:iamanummunir@gmail.com"
              className="text-white hover:text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text transition font-serif"
            >
              Email
            </Link>
          </div>
        </div>
      </footer>
    );
}