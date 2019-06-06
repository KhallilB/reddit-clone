const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const mongoose = require('mongoose');
require('sinon-mongoose');

const Post = require('../models/Post');

// Creating a new post (POST)
//---------------------------------------------------------
// Should pass if post is saved

// Should pass of post is not saved
