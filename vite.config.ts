import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		host: true, // Allow access from network
		port: 5173, // Default Vite port (or specify your preferred port)
	},
	plugins: [
		react(),
		VitePWA({
			// add this to cache all the imports
			registerType: "autoUpdate",
			injectRegister: "auto",
			workbox: {
				globPatterns: ["**/*.{js,css,html,ico,png,svg,json}"],
				maximumFileSizeToCacheInBytes: 6000000,
			},
			// add this to cache all the
			// static assets in the public folder
			// includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
			includeAssets: ["**/*" + ".png", "**/*" + ".svg", "**/*" + ".json"],
			manifest: {
				theme_color: "#000000",
				background_color: "#ffffff",
				display: "browser",
				scope: "/",
				start_url: "/",
				name: "Recovery Version Bible",
				short_name: "rcvbible",
				description: "Recovery Version Bible",
				icons: [
					{
						src: "/icon-192x192.png",
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "/icon-256x256.png",
						sizes: "256x256",
						type: "image/png",
					},
					{
						src: "/icon-384x384.png",
						sizes: "384x384",
						type: "image/png",
					},
					{
						src: "/icon-512x512.png",
						sizes: "512x512",
						type: "image/png",
					},
				],
			},
		}),
	],
});
