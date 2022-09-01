from django import forms
from .models import Task

class TaskForm(forms.ModelForm):
    class Meta:
        model = Task
        fields = '__all__'     
        labels = {
            'request_number': 'Sorğu nömrəsi',
            'user_id':"Müştəri İD",
            'datetime':"Təklifin qüvvədə olduğu müddət",
            'valyuta':'Valyuta',
            'miqdar':'Miqdar',
            'price':'Vahidin qiyməti',
            'edv_degree':'ƏDV dərəcəsi',
            'edv_price':'ƏDV məbləği',
            'payment_terms':'Ödəniş şərti',
            'bank_account':'Bank hesabı',
            'discount':'Endirim',
            'delivery_condition':'Çatdırılma şərti',
            'country':'Ölkə',
            'city':'Şəhər',
            'location':'Ünvan',
            'zipcode':'Zip kod',
            'delivery_date':'Çatdırılma tarixi',
            'delivery_cost':'Çatdırılma xərci',
            'type_transport':'Nəqliyyat növü'
        }
        widgets = {
            'request_number': forms.TextInput(attrs={'class':'form-control'}),
            'user_id':forms.TextInput(attrs={'class':'form-control'}),
            'datetime':forms.DateTimeInput(attrs={'class':'form-control','type':"datetime-local"}),
            'valyuta':forms.Select(attrs={'class':'form-control'}),
            'miqdar':forms.NumberInput(attrs={'class':'form-control','min':"1" ,'max':"5"}),
            'price':forms.NumberInput(attrs={'class':'form-control','min':"1" ,'max':"5"}),
            'edv_degree':forms.NumberInput(attrs={'class':'form-control','min':"1" ,'max':"5"}),
            'edv_price':forms.NumberInput(attrs={'class':'form-control','min':"1" ,'max':"5"}),
            'payment_terms':forms.Select(attrs={'class':'form-control'}),
            'bank_account':forms.NumberInput(attrs={'class':'form-control','min':"1" ,'max':"5"}),
            'discount':forms.Select(attrs={'class':'form-control'}),
            'delivery_condition':forms.Select(attrs={'class':'form-control'}),
            'country':forms.TextInput(attrs={'class':'form-control'}),
            'city':forms.TextInput(attrs={'class':'form-control'}),
            'location':forms.TextInput(attrs={'class':'form-control'}),
            'zipcode':forms.NumberInput(attrs={'class':'form-control','min':"1" ,'max':"5"}),
            'delivery_date':forms.DateTimeInput(attrs={'class':'form-control','type':"datetime-local"}),
            'delivery_cost':forms.NumberInput(attrs={'class':'form-control','min':"1" ,'max':"5"}),
            'type_transport':forms.Select(attrs={'class':'form-control'}),

        }
