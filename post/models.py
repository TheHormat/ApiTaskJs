from django.db import models
# from django.utils.text import slugify


VALYUTA_CHOICES = (
    ('azn','AZN'),
    ('usd','USD'),
    ('eur','EUR'),
    ('try','TRY'),
    ('rub','RUB'),
)

DELIVERY_CHOICES = (
    ('exw','EXW'),
    ('fca','FCA'),
    ('fob','FOB'),
    ('cif','CIF'),
)

ENDIRIM_CHOICES = (
    ('var','VAR'),
    ('yoxdur','YOXDUR'),
)

PAYMENT_CHOICES = (
    ('öncədən ödəniş','ÖNCƏDƏN ÖDƏNİŞ'),
    ('konsiqnasiya','KONSİQNASİYA'),
)

TRANSPORT_CHOICES= (
    ('avtomobil','AVTOMOBİL'),
    ('dəmir yolu','DƏMİR YOLU'),
    ('dəniz','DƏNİZ'),
    ('hava','HAVA'),
)


class Product(models.Model):
    product = models.TextField(verbose_name="Məhsul", null=True,blank=True,max_length=30)
    
    def __str__(self):
        return str(self.product) 
    
class Task(models.Model):
    product = models.ForeignKey(Product, related_name='mehsul', verbose_name='Məhsul',on_delete=models.CASCADE,null=True)
    
    request_number = models.CharField( max_length=10, verbose_name="Sorğu nömrəsi", null=True)
    user_id = models.CharField(max_length=10,verbose_name='Müştəri İD', null=True)
    datetime = models.DateTimeField(verbose_name="Təklifin qüvvədə olduğu müddət", null=True)
    valyuta = models.CharField(max_length=10,choices=VALYUTA_CHOICES,default='azn',verbose_name="Valyuta", null=True)    
    miqdar = models.CharField(max_length=10 ,verbose_name="Miqdar", null=True)
    price = models.CharField(max_length=10 ,verbose_name="Vahidin qiyməti", null=True)
    edv_degree = models.CharField(max_length=10 ,verbose_name="ƏDV dərəcəsi", null=True)
    edv_price = models.CharField(max_length=10 ,verbose_name="ƏDV məbləği", null=True)
    payment_terms = models.TextField( max_length=14,verbose_name="Ödəniş şərti",choices=PAYMENT_CHOICES,default="konsiqnasiya",null=True)
    bank_account = models.CharField(max_length=10 ,verbose_name="Bank hesabı", null=True)
    discount = models.CharField(max_length=10, default="var", choices=ENDIRIM_CHOICES,verbose_name="Endirim", null=True)
    delivery_condition = models.TextField(max_length=4, default="fca",choices=DELIVERY_CHOICES,verbose_name="Çatdırılma şərti", null=True)
    country = models.TextField(verbose_name="Ölkə", null=True)    
    city = models.TextField(verbose_name="Şəhər", null=True)
    location = models.TextField(verbose_name="Ünvan", null=True)
    zipcode = models.CharField(max_length=10,verbose_name="Zip kod", null=True)
    delivery_date = models.DateTimeField(verbose_name="Çatdırılma tarixi", null=True)
    delivery_cost = models.CharField( max_length=10, verbose_name="Çatdırılma xərci", null=True)
    type_transport = models.CharField( max_length=10,default="avtomobil",choices=TRANSPORT_CHOICES, verbose_name="Çatdırılma xərci", null=True)
    
    qaralama = models.BooleanField(default=True,verbose_name="Qaralama")
    tesdiq = models.BooleanField(default=False,verbose_name="Təsdiq gözlənilir")

    # slug = models.SlugField(unique=True,max_length=150,editable=False,null=True)
    #
    #
    # def get_slug(self):
    #     slug = slugify(self.product.replace("ı","i"))
    #     slug = slugify(self.product.replace("e","ə"))
    #     slug = slugify(self.product.replace("o","ö"))
    #     slug = slugify(self.product.replace("u","ü"))
    #     slug = slugify(self.product.replace("g","ğ"))



    #     unique = slug
    #     number = 1
    #
    #     while Task.objects.filter(slug = unique).exists():
    #         unique = '{}-{}'.format(slug,number)
    #         number += 1
    #     return unique
    #
    #
    # def save(self,*args,**kwargs):
    #     self.slug = self.get_slug()
    #     return super(Task,self).save(*args,**kwargs)


    
    # def __str__(self):
    #     return str(self.user_id) 