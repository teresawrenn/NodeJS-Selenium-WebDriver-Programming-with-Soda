var soda = require('soda'),
    chai = require('chai'),
    opn = require('opn'),
    open = require('open'),
    request = require('request'),
    fs = require('fs'),
    testURL = 'https://ttdev.creativeworx.com',
    actionsConstructor = require('cwx_actions'),
    utils = require('cwx_testingutils'),
    exec = require('child_process').exec,
    expect = chai.expect;

var actions = new actionsConstructor({
    testURL : testURL
});

// var browser = soda.createSauceClient({
// 	'url': testURL,
// 	'username': 'CreativeWorx',
// 	'access-key': 'c46a8b1a-a0ec-4c82-b5b3-fa47fd12fa2f',
// 	'os': 'Windows 7',
// 	'browser': 'googlechrome',
// 	'max-duration': 5000,
// 	"tags": ["login", "user/login", "LDAPLogin"],
// });

var browser = soda.createClient({
    host: 'localhost',
    port: 4444,
    url: testURL,
    browser: 'firefox'
});

var waitingTime = 500,
    depth = 7;

browser
	.chain
	.session()
	.setTimeout(900000)
	.open('/user/login')
	.waitForPageToLoad(10000)
	.and(actions.regularLogin('dtorres@creativeworx.com', 'dave1234'))
	.and(actions.assertLoggedIn())
    .and(actions.weekMove("back", depth, waitingTime))
    .and(actions.weekMove("forward", depth, waitingTime))
    .and(actions.weekMove("back", depth, waitingTime))
    .and(actions.weekMove("forward", depth, waitingTime))
    .and(actions.weekMove("back", depth, waitingTime))
    .and(actions.weekMove("forward", depth, waitingTime))
    .and(actions.weekMove("back", depth, waitingTime))
    .and(actions.weekMove("forward", depth, waitingTime))
    .and(actions.weekMove("back", depth, waitingTime))
    .and(actions.weekMove("forward", depth, waitingTime))
    .and(actions.weekMove("back", depth, waitingTime))
    .and(actions.weekMove("forward", depth, waitingTime))
    .and(actions.weekMove("back", depth, waitingTime))
    .and(actions.weekMove("forward", depth, waitingTime))
    .and(actions.weekMove("back", depth, waitingTime))
    // .and(actions.weekMove("forward", depth, waitingTime))
    // .and(actions.weekMove("back", depth, waitingTime))
    // .and(actions.weekMove("forward", depth, waitingTime))
    // .and(actions.weekMove("back", depth, waitingTime))
    // .and(actions.weekMove("forward", depth, waitingTime))
    // .and(actions.weekMove("back", depth, waitingTime))
    // .and(actions.weekMove("forward", depth, waitingTime))
    // .and(actions.weekMove("back", depth, waitingTime))
    // .and(actions.weekMove("forward", depth, waitingTime))
    // .and(actions.weekMove("back", depth, waitingTime))
    // .and(actions.weekMove("forward", depth, waitingTime))
    // .and(actions.weekMove("back", depth, waitingTime))
    // .and(actions.weekMove("forward", depth, waitingTime))
    // .and(actions.weekMove("back", depth, waitingTime))
    // .and(actions.weekMove("forward", depth, waitingTime))
	.end(function(err) {
		utils.completeTest(browser, err);
	});
