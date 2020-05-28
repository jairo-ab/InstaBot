exports.config = {
directConnect: true,
framework: 'jasmine',
seleniumAddress: ' http://localhost:4444/wd/hub ',
specs: ['spec.js'],
capabilities: {
browserName: 'firefox',
chromeOptions: {
 args: ['--disable-gpu', 
	'--headless', 
	'--window-size=800x600']
    }
  },
}; 
