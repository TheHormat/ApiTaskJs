from django.shortcuts import render,redirect
from .forms import TaskForm

def index_views(request):
    form = TaskForm(request.POST)
    if request.method == 'POST':
        form = TaskForm(request.POST)
        if form.is_valid():
            form.save()
        return redirect('/')
      
    context = {"form":form}

    return render(request,'index.html',context)


def update_views(request):
    return render(request,'update.html',{})








# Bu kodu özümçün saxlamışam :)

# def index_views(request):
#     form = TaskForm(request.POST)
#     if request.method == 'POST':
#         form = TaskForm(request.POST)
#         if form.is_valid():
#             form.save()
#         return redirect('/')
      
#     context = {"form":form}

#     return render(request,'index.html',context)