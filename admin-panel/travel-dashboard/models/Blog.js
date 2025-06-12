import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    maxlength: [200, 'Title cannot be more than 200 characters']
  },
  content: {
    type: String,
    required: [true, 'Please provide content']
  },
  image: {
    type: String,
    required: [true, 'Please provide an image URL']
  },
  heading: {
    type: String,
    required: [true, 'Please provide a heading'],
    maxlength: [100, 'Heading cannot be more than 100 characters']
  },
  paragraph: {
    type: String,
    required: [true, 'Please provide a paragraph']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);