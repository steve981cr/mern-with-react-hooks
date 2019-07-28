const express = require ('express'); 
const router = express.Router(); 
const Article = require('../models/article'); 

router.get('/articles', function(req, res) { 
  Article.find(function(err, articles) {
    res.json(articles);
  });
});

router.get('/articles/:id', function(req, res) {  
  Article.findById(req.params.id, function(err, article) {
    if (!article) {
      res.status(404).send('No result found');
    } else {
      res.json(article);
    }
  });
});

router.post('/articles', function(req, res) {     
  let article = new Article(req.body);
  article.save()
    .then(article => {
      res.send(article);
    })
    .catch(function(err) {
      res.status(422).send('Article add failed');
    });
});

router.patch('/articles/:id', function(req, res){    
  Article.findByIdAndUpdate(req.params.id, req.body)
    .then(function() {
      res.json('Article updated');
    })
    .catch(function(err) {
      res.status(422).send("Article update failed.");
    });
});

router.delete('/articles/:id', function(req, res) {  
  Article.findById(req.params.id, function(err, article) {
    if (!article) {
      res.status(404).send('Article not found');
    } else {
      Article.findByIdAndRemove(req.params.id)
        .then(function() { res.status(200).json("Article deleted") })
        .catch(function(err) {
          res.status(400).send("Article delete failed.");
        })
    }
  });
})

module.exports = router;   