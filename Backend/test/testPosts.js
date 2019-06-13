const server = require('../server');
const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = chai.expect;

const mongoose = require('mongoose');
require('sinon-mongoose');

chai.use(chaiHttp);

const Post = require('../models/Post');

// Empty database before each test
describe('Books', () => {
  beforeEach(done => {
    Book.remove({}, err => {
      done();
    });
  });
});

// Creating a new post (POST)
//---------------------------------------------------------
describe('Creating a new post', () => {
  // Should pass if post is created successfully
  it('should create a new post an return success', done => {
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

    post.save((err, result) => {
      PostMock.verify();
      PostMock.restore();
      expect(result.status).to.be.equal(200);
      done();
    });
  });
});

// Getting all posts (GET)
//---------------------------------------------------------
describe('Get all posts', () => {
  // Should pass if all of the posts are recieved
  it('should return all posts and return success', done => {
    //Create mock post
    const PostMock = sinon.mock(Post);
    const result = { status: 200, posts: [] };

    PostMock.expects('find').yields(null, result);

    Post.find((err, result) => {
      PostMock.verify();
      PostMock.restore();
      expect(result.status).to.be.equal(200);
      done();
    });
  });
});

// Get a specific post (GET) (Not passing)
//---------------------------------------------------------
describe('Get a specific post', () => {
  // Should pass if getting a post by its id
  it('should return a single post and return sucess', done => {
    const PostMock = sinon.mock(Post);
    const result = { status: 200, post: [] };

    PostMock.expects('find')
      .once()
      .withArgs({ _id: 12345 })
      .yields(null, result);

    Post.find((err, result) => {
      PostMock.verify();
      PostMock.restore();
      expect(result.status).to.be.equal(200);
      done();
    });
  });
});
