import React from 'react';
import {Paywall} from 'martech-components/_dist/paywall';

function MyPaywall({ content }) {
	const paywallClass = new Paywall({
		content: content
		// content: {
		// 	title: title || 'To continue reading this article ...',
		// 	headline: heading || 'Try The Telegraph free for 1 month',
		// 	excerpt: 'Unlock this article, plus unlimited access to our website and exclusive app with a Digital Subscription. Cancel anytime.',
		// 	ctaText: 'Start your free trial',
		// 	offerInfo: 'offerInfo',
		// 	loginText: 'Log in',
		// 	loginLink: 'https://secure.telegraph.co.uk/customer/secure/login/',
		// 	terms: 'By subscribing, you agree to our <a href="https://www.telegraph.co.uk/contact-us/subscription-terms-conditions/ ">terms and conditions</a> and <a href="https://www.telegraph.co.uk/about-us/privacy-and-cookie-policy/ ">privacy policy</a>.'
		// }
	});
	const template = paywallClass.paywall;
	return (
	  <div dangerouslySetInnerHTML={{__html: template.outerHTML}} />
	);
}

export default MyPaywall;
