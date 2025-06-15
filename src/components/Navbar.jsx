import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
	{ name: "Home", href: "#hero" },
	{ name: "About", href: "#about" },
	{ name: "Skills", href: "#skills" },
	{ name: "Projects", href: "#project" },
	{ name: "Contact", href: "#contact" },
];

export const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={cn(
				"fixed w-full z-40 transition-all duration-300",
				isScrolled
					? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
					: "py-5"
			)}
		>
			<div className="container relative flex flex-row items-center justify-between">
				{/* Logo left */}
				<a
					className="text-1xl font-bold text-primary flex items-center justify-start"
					href="#hero">
					<span className="relative z-10">
						<span className="text-glow text-foreground">Khenzu</span>{" "}
						<span className="font-bold" style={{ color: '#7c6fd6' }}>Portfolio</span>
					</span>
				</a>

				{/* desktop nav */}
				<div className="hidden md:flex space-x-8">
					{navItems.map((item, key) => (
						<a key={key} 
							href={item.href} 
							className="text-foreground/80 hover:[color:#7c6fd6] dark:hover:[color:#7c6fd6] transition-colors duration-300">
							{item.name}
						</a>
					))}
				</div>
                

				{/* mobile nav burger at right end */}
				<button onClick={() => setIsMenuOpen((prev) => !prev)} 
					className="md:hidden p-2 text-foreground z-50 absolute right-0 top-1/2 -translate-y-1/2 mr-3"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
					{isMenuOpen ?<X size ={24}/> : <Menu size={24}/>}
				</button>

				{/* mobile nav overlay */}
				<div
					className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
						"transition-all duration-300 md:hidden",
						isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
					)}>
					<div className="flex flex-col space-y-8 text-xl">
						{navItems.map((item, key) => (
							<a key={key} 
								href={item.href} 
								className="text-foreground/80 hover:[color:#7c6fd6] dark:hover:[color:#7c6fd6] transition-colors duration-300"
								onClick={() => setIsMenuOpen(false)}>
								{item.name}
							</a>
						))}
					</div>
				</div>
			</div>
		</nav>
	);
};