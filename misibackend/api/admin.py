from django.contrib import admin
from .models import *
from import_export.admin import ImportExportModelAdmin

# Register your models here.
class ContactFormAdmin(ImportExportModelAdmin):
    list_display = ('name', 'surname', 'phoneNumber', 'email', 'message')
admin.site.register(ContactFormModel , ContactFormAdmin)

class PostAdmin(ImportExportModelAdmin):
    list_display = ('title', 'body', 'date', 'author', 'tags', 'postType')
admin.site.register(PostModel , PostAdmin)

class PostCategoryAdmin(ImportExportModelAdmin):
    list_display = ('category',)
admin.site.register(PostCategoryModel , PostCategoryAdmin)

class BecomeAMemberAdmin(ImportExportModelAdmin):
    list_display = ('name', 'surname', 'phoneNumber', 'email', 'message')
admin.site.register(BecomeAMemberModel , BecomeAMemberAdmin)

class AboutUsAdmin(ImportExportModelAdmin):
    list_display = ('mission', 'established', 'goal')
admin.site.register(AboutUsModel , AboutUsAdmin)

class SomeFactsAdmin(ImportExportModelAdmin):
    list_display = ('regions', 'projects', 'participants')
admin.site.register(SomeFactsModel , SomeFactsAdmin)