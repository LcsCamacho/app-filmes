export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Filmes",
			href: "/filmes",
		},
		{
			label: "Séries",
			href: "/series",
		}
	],
	navMenuItems: [
		{
			label: "Filmes",
			href: "/filmes",
		},
		{
			label: "Séries",
			href: "/series",
		},
	],
	links: {
		github: "https://github.com/lcscamacho",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
		sponsor: "https://patreon.com/jrgarciadev"
	},
};
