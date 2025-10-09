import Head from 'next/head';

export default function Help() {
	return (
		<>
			<Head>
				<title>Help | Typing Speed Test</title>
				<meta name="description" content="Get help and support for using the Typing Speed Test app." />
			</Head>
			<main className="page">
				<div className="container">
					<header className="header">
						<h1>Help & Support</h1>
						<p className="subtitle">Get help and support for using the Typing Speed Test app.</p>
					</header>
					<section className="card">
						<p>
							If you have any questions or need assistance, please contact our support team or check the FAQ section below.
						</p>
					</section>
				</div>
			</main>
		</>
	);
}
