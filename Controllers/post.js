 
const Post = require('../Models/post')
const slugify = require('slugify');

exports.create = (req, res) => {

 
    const { title, content, user } = req.body;
    const slug = slugify(title)

    if (!(title.trim()) || !(content.trim())) {
        return res.status(400).json({
            error: 'Title and content is required'
        })
    }

    Post.create({ title, content, user, slug }, (err, post) => {
        if (err) {
            console.warn(err);
            res.status(400).json({ Error: 'Duplicate Post' })
        }
        res.json(post)
        
     })
}

exports.list = (req, res) => {
    Post.find({}).exec((err, posts) => {
        if (err) console.log(err);
        res.json(posts)
    })
}

exports.read = (req, res) => {
    const { slug } = req.params;
     Post.findOne({ slug }).exec((err, post) => {
        if (err) console.log(err);
        res.json(post)
    })
}

exports.update = (req, res) => {
    const {slug}=req.params;
    const {title,content,user}=req.body;
    const newslug=slugify(title);
    Post.findOneAndUpdate({slug}, {title,content,user,slug:newslug}, {new:true}).exec((err,updated)=>{
        if(err) res.json(err)
        res.json(updated)
    })
}

exports.remove = (req, res) => {
    const { slug } = req.params;
     Post.findOneAndRemove({ slug }).exec((err, post) => {
        if (err) console.log(err);
        res.json({
            message:`Post is Deleted your post was ${slug}`
        })
    })
}