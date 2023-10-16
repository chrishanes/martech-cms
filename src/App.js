import { useState } from 'react';
import './App.css';
import Paywall from './Paywall/Paywall';

function TextField({ label, value, onChange }) {
	return (
	  	<>
			<label>{label}</label>
			<input type="text"
				value={value}
				placeholder="Add your title..."
				onChange={(e) => onChange(e.target.value)} />
		</>
	);
  }

function App() {
	const [title, setTitle] = useState('');
	const [heading, setHeading] = useState('');
	const content = {
		title: title || 'To continue reading this article ...',
		headline: heading || 'Try The Telegraph free for 1 month',
		excerpt: 'Unlock this article, plus unlimited access to our website and exclusive app with a Digital Subscription. Cancel anytime.',
		ctaText: 'Start your free trial',
		offerInfo: 'offerInfo',
		loginText: 'Log in',
		loginLink: 'https://secure.telegraph.co.uk/customer/secure/login/',
		terms: 'By subscribing, you agree to our <a href="https://www.telegraph.co.uk/contact-us/subscription-terms-conditions/ ">terms and conditions</a> and <a href="https://www.telegraph.co.uk/about-us/privacy-and-cookie-policy/ ">privacy policy</a>.'
	}
	return (
		<div className="App">
			<Paywall content={content} />
			<TextField label="Title" onChange={setTitle} />
			<TextField label="Heading" onChange={setHeading} />
		</div>
  );
}

export default App;
