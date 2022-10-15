<div class="col-xl-4 col-lg-4 col-md-12" style="margin-top: 20px">
    <div class="card">
        <div class="card-header">
            <h4 class="card-title fw-semibold">Топ рефералы</h4>
        </div>
        <div class="card-body">
            <div class="browser-stats">
                @foreach($users as $user)
                    <div class="row mb-4">
                        <div class="col-sm-2 col-lg-3 col-xl-3 col-xxl-2 mb-sm-0 mb-3">
                            <img width="80" height="80" src="/storage/users/default.png" class="img-fluid" alt="img">
                        </div>
                    <div class="col-sm-10 col-lg-9 col-xl-9 col-xxl-10 ps-sm-0">
                        <div class="d-flex align-items-end justify-content-between mb-1">
                            <h6 class="mb-1" style="margin-right: 10px">{{ $user->name }}, </h6>
                            <h6 class="fw-semibold mb-1">рефералов - {{ $user->referrers->count() }}</h6>
                        </div>
                        <div class="progress h-2 mb-3">
                            <div class="progress-bar bg-primary" style="width: 100%;" role="progressbar"></div>
                        </div>
                    </div>
                </div>
                @endforeach

            </div>
        </div>
    </div>
</div>
