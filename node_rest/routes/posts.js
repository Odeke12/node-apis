const express = require('express');
const router = express.Router();
const Post = require('../model/Post');



//GETS THE POSTS
router.get('/', async (req,res) =>{
	try{
	const post = await Post.find();
	res.json(post);
	}catch(err){
	res.json({ message: err })
	}
});
router.get('/specific', (req,res) =>{
	res.send('You are on a specific post');
});

//SUBMITS A POST
router.post('/', async (req,res) => {
	const post = new Post({
		title: req.body.title,
		description: req.body.description
	});
	try{
		const savedPost = await post.save();
		res.json(savedPost);
	}catch (err){
		res.json({ message: err })
	}

post.save()
// .exec()
.then(data => {
	res.json(data);
})
.catch(err => {
	res.json({ message : err })
})

});

//SPECIFIC POST
router.get('/:postId', async (req, res) => {
	try{
	const post = await Post.findById(req.params.postId);
	res.json({ message: post });
	} catch(err){
		res.json({ message: err })
	}
})

//DELETE A SPECIFIC POST
router.delete('/:postId', async (req, res) => {
	try{
	const removedPost = await Post.remove({ _id : req.params.postId })
	res.json({ message : removedPost })
	}
	catch( err ){
		res.json({ message: err })
	}
})

//UODATE A POST
router.patch('/:postId', async (req, res) => {
	try{
		const updatedPost = await Post.updateOne({ _id : req.params.postId }, 
			{$set: {title : req.body.title} }
			);
		}
		catch(err){
			res.json({ message : err })
		}

	});


module.exports = router;