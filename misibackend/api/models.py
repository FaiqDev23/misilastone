from django.db import models

# Create your models here.
class PostCategoryModel(models.Model):
    category = models.CharField(max_length=50)
    def __str__(self):
        return self.category

class PostModel(models.Model):
    title = models.CharField(max_length=255, blank=True, null=True)
    body = models.TextField( blank=True, null=True)
    date = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    author = models.CharField(max_length=255, blank=True, null=True)
    tags = models.CharField(max_length=255, blank=True, null=True)
    postType = models.ForeignKey(PostCategoryModel, on_delete=models.CASCADE, blank=True, null=True)
    image = models.ImageField(upload_to='images/', blank=True, null=True)
    def __str__(self):
        return self.title

class BecomeAMemberModel(models.Model):
    name = models.CharField(max_length=100 , blank=True, null=True)
    surname = models.CharField(max_length=100 , blank=True, null=True)  
    phoneNumber = models.CharField(max_length=100 , blank=True, null=True)
    email = models.EmailField(max_length=100 , blank=True, null=True)
    message = models.TextField( blank=True, null=True)

    def __str__(self):
        return self.name
        
class ContactFormModel(models.Model):
    name = models.CharField(max_length=100 , blank=True, null=True)
    surname = models.CharField(max_length=100 , blank=True, null=True)  
    phoneNumber = models.CharField(max_length=100 , blank=True, null=True)
    email = models.EmailField(max_length=100 , blank=True, null=True)
    message = models.TextField( blank=True, null=True)

    def __str__(self):
        return self.name


class AboutUsModel(models.Model):
    mission = models.TextField( blank=True, null=True)
    established = models.TextField( blank=True, null=True)
    goal = models.TextField( blank=True, null=True)

class SomeFactsModel(models.Model):
    regions = models.IntegerField(default=4 , blank=True, null=True)
    projects = models.IntegerField(default=5 , blank=True, null=True)
    participants = models.IntegerField(default=450 , blank=True, null=True)

