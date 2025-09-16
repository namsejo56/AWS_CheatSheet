# 🚀 AWS CheatSheet

Một trang web tham khảo hoàn chỉnh cho các dịch vụ Amazon Web Services (AWS).

## 🌐 Website Hosting

Website này đã được thiết lập để hosting tự động trên GitHub Pages.

### 🔗 Truy cập Website

- **URL chính**: https://namsejo56.github.io/AWS_CheatSheet/
- **Tự động cập nhật** khi có code mới được push lên repository

### ⚙️ Cách thiết lập Hosting

#### 1. GitHub Pages (Đã thiết lập)
Website tự động được deploy khi:
- Push code lên branch `main` hoặc `master`
- GitHub Actions workflow sẽ build và deploy tự động
- Không cần cấu hình thêm gì

#### 2. Cấu hình Repository Settings
Để đảm bảo GitHub Pages hoạt động:

1. Vào **Repository Settings**
2. Cuộn xuống phần **Pages**
3. Chọn **Source**: `GitHub Actions`
4. Workflow sẽ tự động chạy và deploy website

#### 3. Custom Domain (Tùy chọn)
Để sử dụng domain riêng:

1. Tạo file `CNAME` trong root directory
2. Thêm domain name vào file đó
3. Cấu hình DNS record trỏ về GitHub Pages

### 🛠️ Phát triển Local

#### Chạy website trên máy local:

```bash
# Cài đặt Ruby và Jekyll (nếu chưa có)
gem install bundler jekyll

# Clone repository
git clone https://github.com/namsejo56/AWS_CheatSheet.git
cd AWS_CheatSheet

# Chạy server local
jekyll serve

# Hoặc chỉ mở file HTML trực tiếp
open index.html
```

#### Cấu trúc files:
```
AWS_CheatSheet/
├── index.html          # Trang chính
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── _config.yml         # Jekyll configuration
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions workflow
└── README.md           # Tài liệu này
```

### 📋 Tính năng Website

- ✅ **Responsive Design**: Tương thích mọi thiết bị
- ✅ **Search Function**: Tìm kiếm dịch vụ AWS
- ✅ **Smooth Navigation**: Điều hướng mượt mà
- ✅ **Modern UI**: Giao diện hiện đại
- ✅ **Fast Loading**: Tải nhanh, tối ưu hóa
- ✅ **SEO Optimized**: Tối ưu cho công cụ tìm kiếm

### 🎯 Nội dung

Website bao gồm thông tin về các dịch vụ AWS chính:

- **Compute**: EC2, Lambda, ECS/EKS
- **Storage**: S3, EBS, EFS  
- **Database**: RDS, DynamoDB, ElastiCache
- **Networking**: VPC, CloudFront, Route 53
- **Security**: IAM, Cognito, KMS
- **Monitoring**: CloudWatch, CloudTrail, X-Ray

### 🔄 Cập nhật Website

1. **Chỉnh sửa code** trong repository
2. **Commit và push** lên GitHub
3. **GitHub Actions** tự động build và deploy
4. **Website sẽ cập nhật** trong vài phút

### 📞 Hỗ trợ

Nếu có vấn đề với hosting hoặc website:

1. Kiểm tra **Actions tab** để xem build status
2. Xem **Issues** nếu có lỗi
3. Tạo **Issue mới** nếu cần hỗ trợ

---

📚 **Made with ❤️ for the AWS community**