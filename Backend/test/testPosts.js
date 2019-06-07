const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const mongoose = require('mongoose');
require('sinon-mongoose');

const Post = require('../models/Post');

// Creating a new post (POST)
//---------------------------------------------------------
// Should pass if post is saved
describe('Creating a new post', function() {
  it('should create a new post an return success', function(done) {
    // Create a mock post
    const PostMock = sinon.mock(
      new Post({
        title: 'Mock Post',
        url: 'http://www.mockpost.com',
        description: 'This is a mock post'
      })
    );
    const post = PostMock.object;
    const result = { status: 200 };

    PostMock.expects('save').yields(null, result);

    post.save(function(err, result) {
      PostMock.verify();
      PostMock.restore();
      expect(result.status).to.be.equal(200);
      done();
    });
  });
});

// Should pass of post is not saved
