from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import *
from rest_framework.response import Response
from rest_framework import status , viewsets
from .serializers import *
from django.db.models import Q


#########################################################################################################
@api_view(['POST'])
def postContactForm(request):
    serializer = ContactFormSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def getContactForm(request):
    contactForm = ContactFormModel.objects.all()
    serializer = ContactFormSerializer(contactForm, many=True).order_by('-date')
    return Response(serializer.data)

@api_view(['POST'])
def postBecomeAMember(request):
    serializer = BecomeAMemberSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#########################################################################################################

@api_view(['GET'])
def getAllPosts(request):
    posts = PostModel.objects.all()
    serializer = PostModelSerializer(posts, many=True).order_by('-date')
    return Response(serializer.data)

@api_view(['GET'])
def getPostByID(request, id):
    post = PostModel.objects.get(id=id)
    serializer = PostModelSerializer(post, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getPostByCategory(request, category):
    posts = PostModel.objects.filter(postType__category=category).order_by('-date')
    serializer = PostModelSerializer(posts, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getLatest4Projects(request):
    posts = PostModel.objects.filter(postType__category='Projects').order_by('-date')[:4]
    serializer = PostModelSerializer(posts, many=True)
    return Response(serializer.data)

#########################################################################################################
@api_view(['GET'])
def getSomeFacts(request):
    someFacts = SomeFactsModel.objects.all()
    serializer = SomeFactsSerializer(someFacts, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getAboutUs(request):
    aboutUs = AboutUsModel.objects.all()
    serializer = AboutUsSerializer(aboutUs, many=True)
    return Response(serializer.data)