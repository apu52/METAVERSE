#include<iostream>
using namespace std;
class person
{
	protected:
		char name[30];
		char adress[100];
		int phone_no;
	public:
		void get_pdetails();
		void show_pdetails();
};
void person::get_pdetails()
{
	cout<<"Enter the person name :: ";
	cin>>name;
	cout<<"Enter the adress of the person :: ";
	cin>>adress;
	cout<<"Enter the phone_no of the person :: ";
	cin>>phone_no;
}
void person::show_pdetails()
{
	cout<<name<<endl;
	cout<<adress<<endl;
	cout<<phone_no<<endl;
}
class emplyoee :public person
{
	public:
		char e_name[30];
		int e_id;
};
class manager : public emplyoee
{
	public:
		char designation[20];
		char depart_name[20];
		int salary;
	public:
		void gett_details()
		{
			cout<<"enter the emplyoee name :: ";
			cin>>e_name;
			cout<<"enter the emplyoee id :: ";
			cin>>e_id;
			cout<<"enter the the designation ::";
			cin>>designation;
			cout<<"enter the department name :: ";
			cin>>depart_name;
			cout<<"enter salary :: ";
			cin>>salary;
		}
};
int main()
{
	manager m[100];
	int n,h = 0;
	cout<<"Enter the number  manager you want ::";
	cin>>n;
	for(int i= 0 ; i<n ; i++)
	{
		m[i].gett_details();
	}
	for(int i=0;i<n;i++)
	{
		if(m[h].salary<m[i].salary)
		{
			h=i;
		}
	}
	cout<<"highest salary is :: "<<m[h].salary;
	cout<<m[h].e_name;
}
