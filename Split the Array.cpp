class Solution {
  public:
   int countgroup(vector<int>& arr) {
  int xorValue = 0, MOD = 1e9 + 7;
  for(int i=0;i<arr.size();i++){
      xorValue^=arr[i];
  }
  if(xorValue!=0){
      return 0;
  }
  int value = 1;
  for(int i=0;i<arr.size()-1;i++){
      value = (value*2)%MOD;
  }
  return value-1;
}
};
