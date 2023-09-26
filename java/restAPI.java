package java;
// import javax.persistence.Entity;
// import javax.persistence.GeneratedValue;
// import javax.persistence.GenerationType;
// import javax.persistence.Id;

// @Entity
// public class Product {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     private String name;
//     private String description;
//     private double price;

//     public Product() {
//     }

//     public Product(String name, String description, double price) {
//         this.name = name;
//         this.description = description;
//         this.price = price;
//     }

//     // Getters and setters

//     public Long getId() {
//         return id;
//     }

//     public void setId(Long id) {
//         this.id = id;
//     }

//     public String getName() {
//         return name;
//     }

//     public void setName(String name) {
//         this.name = name;
//     }

//     public String getDescription() {
//         return description;
//     }

//     public void setDescription(String description) {
//         this.description = description;
//     }

//     public double getPrice() {
//         return price;
//     }

//     public void setPrice(double price) {
//         this.price = price;
//     }
// }


// /**********************************************************************************************************************/

// import org.springframework.data.jpa.repository.JpaRepository;

// public interface ProductRepository extends JpaRepository<Product, Long> {
    
// }

// /**********************************************************************************************************************/

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;
// import java.util.List;

// @Service
// public class ProductService {
    
//     private final ProductRepository productRepository;
    
//     @Autowired
//     public ProductService(ProductRepository productRepository) {
//         this.productRepository = productRepository;
//     }
    
//     public List<Product> getAllProducts() {
//         return productRepository.findAll();
//     }
    
//     public Product getProductById(Long id) {
//         return productRepository.findById(id)
//                 .orElseThrow(() -> new NotFoundException("Product not found with id: " + id));
//     }
    
//     public Product createProduct(Product product) {
//         return productRepository.save(product);
//     }
    
//     public Product updateProduct(Long id, Product updatedProduct) {
//         Product existingProduct = getProductById(id);
//         existingProduct.setName(updatedProduct.getName());
//         existingProduct.setDescription(updatedProduct.getDescription());
//         existingProduct.setPrice(updatedProduct.getPrice());
//         return productRepository.save(existingProduct);
//     }
    
//     public void deleteProduct(Long id) {
//         Product product = getProductById(id);
//         productRepository.delete(product);
//     }
// }


// /**********************************************************************************************************************/


// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;
// import java.util.List;

// @RestController
// @RequestMapping("/api/products")
// public class ProductController {
    
//     private final ProductService productService;
    
//     @Autowired
//     public ProductController(ProductService productService) {
//         this.productService = productService;
//     }
    
//     @GetMapping
//     public List<Product> getAllProducts() {
//         return productService.getAllProducts();
//     }
    
//     @GetMapping("/{id}")
//     public Product getProductById(@PathVariable Long id) {
//         return productService.getProductById(id);
//     }
    
//     @PostMapping
//     public Product createProduct(@RequestBody Product product) {
//         return productService.createProduct(product);
//     }
    
//     @PutMapping("/{id}")
//     public Product updateProduct(@PathVariable Long id, @RequestBody Product product) {
//         return productService.updateProduct(id, product);
//     }
    
//     @DeleteMapping("/{id}")
//     public void deleteProduct(@PathVariable Long id) {
//         productService.deleteProduct(id);
//     }
// }


// /**********************************************************************************************************************/