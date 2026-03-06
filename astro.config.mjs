// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://yaptide.github.io',
	base: '/docs',
	integrations: [
		starlight({
			title: 'YAPTIDE',
			tagline: 'A web-based IDE for Monte Carlo particle transport simulations',
			logo: {
				light: './src/assets/yaptide-logo-light.svg',
				dark: './src/assets/yaptide-logo-dark.svg',
				replacesTitle: false,
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/yaptide' },
			],
			customCss: ['./src/styles/custom.css'],
			editLink: {
				baseUrl: 'https://github.com/yaptide/yaptide-docs/edit/main/',
			},
			sidebar: [
				{
					label: 'Home',
					items: [
						{ label: 'Welcome', slug: '' },
					],
				},
				{
					label: 'User Guide',
					items: [
						{ label: 'Getting Started', slug: 'user-guide/getting-started' },
						{ label: 'Geometry', slug: 'user-guide/geometry' },
						{ label: 'Beam & Physics', slug: 'user-guide/beam-physics' },
						{ label: 'Scoring', slug: 'user-guide/scoring' },
						{ label: 'Running Simulations', slug: 'user-guide/running-simulations' },
					],
				},
				{
					label: 'Hosting',
					items: [
						{ label: 'Celery (Docker)', slug: 'hosting/celery-docker' },
						{ label: 'SLURM (Docker)', slug: 'hosting/slurm-docker' },
					],
				},
				{
					label: 'Development',
					items: [
						{ label: 'Frontend Only (Geant4)', slug: 'development/frontend-only' },
						{ label: 'Local — Celery Workers', slug: 'development/local-celery' },
						{ label: 'Local — SLURM / PLGrid', slug: 'development/local-slurm' },
						{ label: 'Docker — Celery Workers', slug: 'development/docker-celery' },
						{ label: 'Docker — SLURM / PLGrid', slug: 'development/docker-slurm' },
					],
				},
				{
					label: 'Architecture',
					items: [
						{ label: 'System Overview', slug: 'architecture/overview' },
						{ label: 'Data Flow', slug: 'architecture/data-flow' },
						{ label: 'Project JSON Schema', slug: 'architecture/project-json-schema' },
						{ label: 'Authentication Model', slug: 'architecture/auth-model' },
					],
				},
				{
					label: 'Internals',
					collapsed: true,
					items: [
						{
							label: 'Backend',
							collapsed: true,
							items: [
								{ label: 'Overview', slug: 'backend/overview' },
								{ label: 'API Endpoints', slug: 'backend/api-endpoints' },
								{ label: 'Database', slug: 'backend/database' },
								{ label: 'Simulation Lifecycle', slug: 'backend/simulation-lifecycle' },
								{ label: 'Simulator Management', slug: 'backend/simulator-management' },
								{ label: 'Docker Deployment', slug: 'backend/docker-deployment' },
								{ label: 'Testing', slug: 'backend/testing' },
							],
						},
						{
							label: 'Frontend',
							collapsed: true,
							items: [
								{ label: 'Overview', slug: 'frontend/overview' },
								{ label: '3D Editor', slug: 'frontend/3d-editor' },
								{ label: 'Simulation Services', slug: 'frontend/simulation-services' },
								{ label: 'Pyodide Converter', slug: 'frontend/pyodide-converter' },
								{ label: 'Geant4 WebAssembly', slug: 'frontend/geant4-wasm' },
								{ label: 'Auth Flows', slug: 'frontend/auth-flows' },
								{ label: 'Adding Commands', slug: 'frontend/adding-commands' },
								{ label: 'Testing', slug: 'frontend/testing' },
							],
						},
						{
							label: 'Converter',
							collapsed: true,
							items: [
								{ label: 'Overview', slug: 'converter/overview' },
								{ label: 'Conversion Flow', slug: 'converter/conversion-flow' },
								{ label: 'Adding a Simulator', slug: 'converter/adding-a-simulator' },
								{ label: 'SHIELD-HIT12A', slug: 'converter/shieldhit' },
								{ label: 'FLUKA', slug: 'converter/fluka' },
								{ label: 'Geant4', slug: 'converter/geant4' },
								{ label: 'Testing', slug: 'converter/testing' },
							],
						},
					],
				},
				{
					label: 'Contributing',
					items: [
						{ label: 'Contribution Guide', slug: 'contributing/guide' },
						{ label: 'Code Style', slug: 'contributing/code-style' },
						{ label: 'Glossary', slug: 'contributing/glossary' },
					],
				},
				{
					label: 'API Reference',
					items: [
						{ label: 'Overview', slug: 'api-reference/overview' },
						{ label: 'Authentication', slug: 'api-reference/auth' },
						{ label: 'Jobs', slug: 'api-reference/jobs' },
						{ label: 'Results', slug: 'api-reference/results' },
						{ label: 'User', slug: 'api-reference/user' },
					],
				},
			],
		}),
	],
});
