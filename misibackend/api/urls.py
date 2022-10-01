from django.urls import path
from .views import *


urlpatterns = [
    path('contactForm/', postContactForm, name='Send a contact form'),
    path('become_a_member/',postBecomeAMember, name='Send a become a member form'),
    path('contactForm/get/', getContactForm, name='Get all contact forms'),
    path('posts/', getAllPosts, name='Get all posts'),
    path('posts/<int:id>/', getPostByID, name='Get a post by id'),
    path('posts/category/<str:category>/', getPostByCategory, name='Get a post by category'),
    path('posts/projects/latest/', getLatest4Projects, name='Get latest 4 posts'),
    path('someFacts/', getSomeFacts, name='Get some facts'),
    path('aboutUs/', getAboutUs, name='Get about us'),
]