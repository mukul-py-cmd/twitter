from rest_framework import permissions

class ReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.method in permissions.SAFE_METHODS

class IsProfileOwner(permissions.BasePermission):
	message = 'You must be the owner of this profile'

	def has_object_permission(self, request, view, obj):
		return obj.user == request.user