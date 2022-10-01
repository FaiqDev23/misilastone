from .models import *
from rest_framework import serializers

class ContactFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactFormModel
        fields = '__all__'

class PostModelSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source='postType.category' , read_only=True)
    class Meta:
        model = PostModel
        fields = '__all__'

class PostCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PostCategoryModel
        fields = '__all__'

class BecomeAMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = BecomeAMemberModel
        fields = '__all__'

class AboutUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutUsModel
        fields = '__all__'

class SomeFactsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SomeFactsModel
        fields = '__all__'