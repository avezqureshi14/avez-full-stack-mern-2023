const Product = require("../models/productModels");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const apiFeatures = require("../utils/apiFeatures");
//Create Product -- ADMIN
exports.createProduct = catchAsyncErrors( async (req,res,next)=>{
    req.body.user = req.user.id
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}) 

//Update Products -- ADMIN
exports.updateProduct = catchAsyncErrors( async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
      return next(new ErrorHander("Product not found", 404));
    }
  

      product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
    
      res.status(200).json({
        success: true,
        product,
      });
    });
  
exports.getAllProducts = catchAsyncErrors( async (req,res) =>{
    const resultPerPage = 2;
    const productCount = await Product.countDocuments
    const ApiFeatures = new apiFeatures(Product.find(),req.query)
    .search()
    .filter().pagination(resultPerPage)
    let products  = await ApiFeatures.query;
    res.status(200).json({
        success:true,
        products
    })
}) 

exports.deleteProducts = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
  
    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }
  
    await product.remove();
  
    res.status(200).json({
      success: true,
      message: "Product Delete Successfully",
    });
  });
  


  exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
  
    if (!product) {
      return next(new ErrorHander("Product not found", 404));
    }
  
    res.status(200).json({
      success: true,
      product,
    });
  });