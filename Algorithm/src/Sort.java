
public class Sort {
	//left 가 시작위취
	//right가 종료 위치
	//list가 정렬할 배열
	public static void quickSort(
		int left, int right, int [] list) {
		//배열 출력
		for(int x : list) {
			System.out.print(x + "\t");
		}
		System.out.print("\n");
		
		//비교할 기준위치
		int pivot = left;
		//pivot이 위치해야할 자리를 저장
		int j = pivot;
		//비교대상의 위치
		int i = left + 1;
		//데이터가 개수가 1개 이상인 경우만 수행
		if(left < right) {
			//비교는 두번째부터 끝까지
			for(; i<=right; i=i+1) {
				//기준 데이터가 더 크면
				if(list[pivot] > list[i]) {
					j = j + 1;
					int temp = list[j];
					list[j] = list[i];
					list[i] = temp;
				}
			}
			
			//1회전이 끝나면 pivot 데이터를 자신의 자리로
			//이동
			int temp = list[left];
			list[left] = list[j];
			list[j] = temp;
			
			//pivot을 기준으로 왼쪽과 오른쪽 배열을 다시 수행
			pivot = j;
			quickSort(left, pivot-1, list);
			quickSort(pivot+1, right, list);
			
		}
		
		
	}
	
	
	public static void main(String[] args) {
		int [] ar = {32, 17, 24, 41, 29, 44, 51};
		quickSort(0, ar.length-1, ar);

	}
}