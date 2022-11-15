import { Component } from "@angular/core";
import { NbMenuItem } from "@nebular/theme";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "nb-menu";

  items: NbMenuItem[] = [
    {
      title: "Profile",
      expanded: true,
      children: [
        {
          title: "Change Password",
        },
        {
          title: "Privacy Policy",
        },
        {
          title: "Logout",
        },
      ],
    },
    {
      title: "Shopping Bag",
    },
    {
      title: "Orders",
    },
  ];
}
