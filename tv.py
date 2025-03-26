import customtkinter as ctk
from PIL import Image, ImageTk
import os

ctk.set_appearance_mode("dark")
ctk.set_default_color_theme("blue")

canais = ["img_tv/panam.jpg", "img_tv/judy-alvarez.jpeg", "img_tv/cyberpunk2077.webp"]  

class TV:
    def __init__(self, root, room_name):
        self.root = root
        self.room_name = room_name
        self.is_on = True
        self.volume = 50
        self.channel_index = 0
        
        self.frame = ctk.CTkFrame(root, corner_radius=10)
        self.frame.pack(pady=20, padx=20, fill='both', expand=True)
        
        self.label = ctk.CTkLabel(self.frame, text=room_name, font=("Arial", 20, "bold"))
        self.label.pack(pady=10)
        
        self.image_label = ctk.CTkLabel(self.frame, text="")
        self.image_label.pack()
        
        self.update_image()
        
        self.channel_btn = ctk.CTkButton(self.frame, text="Mudar Canal", command=self.change_channel)
        self.channel_btn.pack(pady=5)
        
        self.volume_btn = ctk.CTkButton(self.frame, text="Aumentar Volume", command=self.increase_volume)
        self.volume_btn.pack(pady=5)
        
        self.power_btn = ctk.CTkButton(self.frame, text="Ligar/Desligar", command=self.toggle_power)
        self.power_btn.pack(pady=5)
        
    def update_image(self):
        if self.is_on and os.path.exists(canais[self.channel_index]):
            img = Image.open(canais[self.channel_index])
            img = img.resize((300, 200))
            img = ImageTk.PhotoImage(img)
            self.image_label.configure(image=img)
            self.image_label.image = img
        else:
            self.image_label.configure(image="", text="TV Desligada", font=("Arial", 18, "bold"))
    
    def toggle_power(self):
        self.is_on = not self.is_on
        self.update_image()
    
    def change_channel(self):
        if self.is_on:
            self.channel_index = (self.channel_index + 1) % len(canais)
            self.update_image()
    
    def increase_volume(self):
        if self.is_on and self.volume < 100:
            self.volume += 10
            print(f"{self.room_name}: Volume {self.volume}")

root = ctk.CTk()
root.geometry("700x500")
root.title("Simulador de TV")

tv_sala = TV(root, "TV da Sala")
tv_quarto = TV(root, "TV do Quarto")

root.mainloop()
