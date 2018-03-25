// ==UserScript==
// @name         Availability Filter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Show's the list of services that are available in the target environment
// @author       Craig Floyd
// @match        https://console.aws.amazon.com/*
// @require http://code.jquery.com/jquery-1.12.4.min.js
// ==/UserScript==

(function() {
    'use strict';
    var confirmed = [
        'cd', //CodeDeploy
        'cfg', //Config
        'cfo', //CloudFormation
        'ctr', //CloudTrail
        'cw',  //CloudWatch
        'ddb', //Dynamo
        'dms', //Data Migration Service
        'dp', //Data Pipeline
        'ec2', //ec2
        'elc', //Elasticache
        'emr', //emr
        'es',  //Elasticsearch Service
        'gl',  //Glacier
        'iam', //iam
        'ki', //Kinesis
        'rds', //rds
        'rs', //Redshift
        's3',  //s3
        'sns', //sns
        'sqs', //sqs
        'swf', //swf
        'ta', //Trusted Advisor
        'vpc'  //vpc
    ];

    var notIncluded = [
        'efs', //EFS
        'gal', //GameLift
        'imex', //Snowball
        'iot', //Internet of Things
        'lam', //Lambda
        'sg', //Storage Gateway
        'r53'  //Route 53
    ];

    $('[data-service-id]').each(function(){
        var service = $(this).attr('data-service-id');
        if (notIncluded.indexOf(service) != -1){
            $(this).fadeTo(1, 0.35);
        } else if (confirmed.indexOf(service) != -1){
            $(this).find('a').css("font-weight","Bold");
        } //else do nothing. It is unknown whether this service is available or not

    });
})();
