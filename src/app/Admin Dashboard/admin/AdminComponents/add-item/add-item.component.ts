import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopupComponent } from 'src/app/components/popup/popup.component';
import { FoodListService } from 'src/app/services/food-list.service';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  selectedItem: any = {};
  selectedImage: any;
  imagePreview: string | ArrayBuffer;
  details: any;

  constructor(
    private foodListService: FoodListService,
    private router: Router,
    public popupService: PopupService
  ) {}

  ngOnInit(): void {
    // Initialize selectedItem here or fetch data from database
    this.selectedItem = {
      food_name: '',
      food_image: '',
      food_price: '',
      food_description: '',
      food_category: '',
      food_quantity: '0',
    };
  }

  addItemButton(AddItemInfo: any): void {
    if (
      AddItemInfo.value.food_name &&
      AddItemInfo.value.food_description &&
      AddItemInfo.value.food_price &&
      AddItemInfo.value.food_category
    ) {
      const addItemDetais = {
        food_name: AddItemInfo.value.food_name,
        food_image: this.selectedItem.food_image,
        food_price: AddItemInfo.value.food_price,
        food_description: AddItemInfo.value.food_description,
        food_category: AddItemInfo.value.food_category,
        food_quantity: this.selectedItem.food_quantity,
      };

      this.foodListService.createFoodItem(addItemDetais).subscribe((data) => {
        this.details = data;
      });

      //clearing the form after add button clicked
      AddItemInfo.reset();

      // Clear the selected image and image preview
      this.selectedImage = null;
      this.imagePreview = null;
      this.selectedItem.food_image = '';

      this.popupService.popupMessage = 'Item is added successfully 🤩';
    } else {
      this.popupService.popupMessage = 'Opps... Looks like fields are empty 🙃';
    }
  }

  // Method to handle image selection and preview
  onImagePicked(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.selectedImage = file;

      // Create an image preview
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result; // Set the preview for the image
      };
      reader.readAsDataURL(file);

      // Generate a unique image name
      const imageName = file.name; // Keep the original file name
      const imagePath = `assets/images/${imageName}`; // This will now use the original name

      // Update the image path in the selectedItem
      this.selectedItem.food_image = imagePath;
    } else {
      alert('Please upload an image!');
      return;
    }
  }

  navigateBack(): void {
    this.selectedItem = null;
    this.router.navigate(['/adminDashboard/admin-home-page']);
  }

  showPopup(): void {
    this.popupService.openPopup(PopupComponent, this.popupService.popupMessage);
  }
}
